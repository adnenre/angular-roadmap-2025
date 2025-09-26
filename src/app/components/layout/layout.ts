import { Component, VERSION } from '@angular/core';
import { MenuItem } from '../../models/menu-item.model';
import { navbarItems } from '../../menu_item';
import { SidebarComponent } from '../sidebar/sidebar';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  imports: [RouterOutlet, SidebarComponent, BreadcrumbComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {
  angularVersion = VERSION.full;
  readonly menuItems: MenuItem[] = navbarItems;
  onItemSelect(event: { item: MenuItem; level: number }): void {
    console.log('Selected:', event.item.name, 'at level:', event.level);
  }
}
