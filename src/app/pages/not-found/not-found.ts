// pages/not-found/not-found.component.ts
import { Component, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.html',
  standalone: true,
})
export class NotFoundComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  attemptedUrl: string = '';

  ngOnInit() {
    // Get the attempted URL for debugging
    this.attemptedUrl = this.route.snapshot.url.join('/') || 'unknown';
  }

  goBack(): void {
    window.history.back();
  }

  goHome(): void {
    this.router.navigate(['/']);
  }
}
