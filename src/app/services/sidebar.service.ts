import { Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, NavigationHistory, BreadcrumbItem } from '../models/menu-item.model';
import { sideBarTitle } from '../../main-config';
@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Signals for reactive state management
  private currentLevel = signal<number>(0);
  private history = signal<NavigationHistory[]>([]);
  private maxDepth = signal<number>(4); // Set appropriate max depth

  // Computed values
  readonly currentLevelValue = this.currentLevel.asReadonly();
  readonly historyValue = this.history.asReadonly();
  readonly maxDepthValue = this.maxDepth.asReadonly();

  readonly breadcrumbs = computed(() => {
    const crumbs: BreadcrumbItem[] = [{ name: 'Main Menu', route: '/' }];

    this.history().forEach((historyItem) => {
      if (historyItem?.item) {
        crumbs.push({
          name: historyItem.item.name,
          route: historyItem.item.route,
        });
      }
    });

    return crumbs;
  });

  constructor(private router: Router) {}

  getItemsForLevel(level: number, items: MenuItem[]): MenuItem[] {
    if (level === 0) return items;

    let currentItems = items;
    for (let i = 0; i < level; i++) {
      const historyItem = this.history()[i];
      if (historyItem?.item?.children) {
        currentItems = historyItem.item.children;
      } else {
        return [];
      }
    }
    return currentItems;
  }

  getTitleForLevel(level: number): string {
    if (level === 0) return sideBarTitle;
    const historyItem = this.history()[level - 1];
    return historyItem ? historyItem.item.name : `Level ${level}`;
  }

  navigateToLevel(targetLevel: number, item: MenuItem, allItems: MenuItem[]): void {
    if (targetLevel > this.maxDepth()) return;

    const previousLevel = this.currentLevel();
    const newHistory = [
      ...this.history().slice(0, targetLevel - 1),
      { level: previousLevel, item },
    ];

    this.history.set(newHistory);
    this.currentLevel.set(targetLevel);

    // If item has a route, navigate to it
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  navigateToRoute(item: MenuItem): void {
    if (item.route) {
      this.router.navigate([item.route]);
    }
  }

  resetNavigation(): void {
    this.currentLevel.set(0);
    this.history.set([]);
  }

  setCurrentLevel(level: number): void {
    if (level >= 0 && level <= this.maxDepth()) {
      this.currentLevel.set(level);
    }
  }

  truncateHistory(level: number): void {
    // Keep only history up to the specified level
    const newHistory = this.history().slice(0, level);
    this.history.set(newHistory);
  }

  goBack(allItems: MenuItem[]): void {
    if (this.currentLevel() === 0) return;

    const newLevel = this.currentLevel() - 1;
    // this.currentLevel.set(newLevel);
    this.truncateHistory(newLevel);
    this.setCurrentLevel(newLevel);
    // Navigate to parent route if available
    const parentItem = this.history()[newLevel - 1]?.item;
    if (parentItem?.route) {
      this.router.navigate([parentItem.route]);
    } else if (newLevel === 0) {
      this.router.navigate(['/']);
    }
  }
}
