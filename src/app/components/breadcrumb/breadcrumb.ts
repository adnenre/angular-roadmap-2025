import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [], // No imports needed since we're using control flow
  templateUrl: './breadcrumb.html',
})
export class BreadcrumbComponent {
  private sidebarService = inject(SidebarService);
  private router = inject(Router);

  readonly breadcrumbs = this.sidebarService.breadcrumbs;

  onBreadcrumbClick(index: number): void {
    if (index === 0) {
      this.sidebarService.resetNavigation();
      this.router.navigate(['/']);
    } else {
      this.sidebarService.resetNavigation();
      this.router.navigate(['/']);
    }
  }
}
