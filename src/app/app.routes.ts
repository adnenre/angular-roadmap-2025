// src/app/app.routes.ts

import { Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout';
import { DocViewerComponent } from './components/doc-viewer/doc-viewer.component';
import { NotFoundComponent } from './pages/not-found/not-found';
export const routes: Routes = [
  { path: '', redirectTo: '/docs/introduction/angular-history', pathMatch: 'full' },
  {
    path: 'docs',
    component: LayoutComponent, // The main layout wraps all documentation
    children: [
      {
        // This is the key: a dynamic segment to capture the full path from the sidebar
        path: '**', // Matches the entire route structure: introduction/architecture, components/anatomy, etc.
        component: DocViewerComponent,
      },
    ],
  },
  // Optionally, a 404 page
  { path: '**', component: NotFoundComponent, title: 'Page Not Found' },
];
