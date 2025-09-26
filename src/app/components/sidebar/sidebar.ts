import { Component, OnInit, inject, input, output, VERSION } from '@angular/core';
import { CommonModule, NgClass } from '@angular/common';
import { SidebarService } from '../../services/sidebar.service';
import { MenuItem } from '../../models/menu-item.model';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, NgClass],
  templateUrl: './sidebar.html',
})
export class SidebarComponent implements OnInit {
  private sidebarService = inject(SidebarService);
  angularVersion = VERSION.full;
  // Input for menu items
  menuItems = input.required<MenuItem[]>();

  // Output for item selection
  itemSelect = output<{ item: MenuItem; level: number }>();

  readonly currentLevel = this.sidebarService.currentLevelValue;
  readonly maxDepth = this.sidebarService.maxDepthValue;

  totalContainers: number[] = [];

  readonly transformStyle = () => {
    const translateX = -this.currentLevel() * 100;
    return `translateX(${translateX}%)`;
  };

  ngOnInit(): void {
    this.totalContainers = Array.from({ length: this.maxDepth() + 1 }, (_, i) => i);
  }

  getItemsForLevel(level: number): MenuItem[] {
    return this.sidebarService.getItemsForLevel(level, this.menuItems());
  }

  getTitleForLevel(level: number): string {
    return this.sidebarService.getTitleForLevel(level);
  }

  onItemClick(item: MenuItem, level: number): void {
    console.log('Before navigation - Level:', level, 'Item:', item.name);
    if (this.hasChildren(item, level)) {
      this.sidebarService.navigateToLevel(level + 1, item, this.menuItems());
    } else {
      this.selectItem(item, level);
      this.sidebarService.navigateToRoute(item);
    }
    this.debugNavigation();
  }

  selectItem(item: MenuItem, level: number): void {
    this.itemSelect.emit({ item, level });
  }

  hasChildren(item: MenuItem, currentLevel: number): boolean {
    return !!(item.children && currentLevel < this.maxDepth());
  }

  getItemClasses(item: MenuItem, currentLevel: number): string {
    const baseClasses = `flex items-center justify-between p-3 mx-2 my-1  cursor-pointer transition-all duration-200 rounded-r-lg border-l-1  border-gray-500 hover:border-l-2 hover:border-gray-900 `;
    const hasChildren = this.hasChildren(item, currentLevel);

    if (hasChildren) {
      return `${baseClasses} flex-1 flex items-center px-3 py-2 text-sm font-medium text-gray-500  hover:text-gray-900 transition-colors duration-200 `;
    } else {
      return `${baseClasses} flex-1 flex items-center px-3 py-2 text-sm font-medium text-gray-500  hover:text-gray-900 transition-colors duration-200 `;
    }
  }
  debugNavigation(): void {
    console.log('Current Navigation State:', {
      currentLevel: this.currentLevel(),
      maxDepth: this.maxDepth(),
      history: this.sidebarService.historyValue(),
      breadcrumbs: this.sidebarService.breadcrumbs(),
    });
  }

  // Call this in your methods for debugging
  onBackClick(): void {
    console.log('Before goBack - Level:', this.currentLevel());
    this.sidebarService.goBack(this.menuItems());
    this.debugNavigation(); // Check state after goBack
  }
}
