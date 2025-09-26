import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
})
export class App {
  // readonly menuItems: MenuItem[] = [
  //   { id: '1', name: 'Dashboard', icon: '📊', route: '/dashboard' },
  //   {
  //     id: '2',
  //     name: 'Products',
  //     icon: '📦',
  //     children: [
  //       { id: '2-1', name: 'All Products', icon: '📋', route: '/products' },
  //       {
  //         id: '2-2',
  //         name: 'Categories',
  //         icon: '📁',
  //         children: [
  //           { id: '2-2-1', name: 'Electronics', icon: '📱' },
  //           { id: '2-2-2', name: 'Clothing', icon: '👕' },
  //           {
  //             id: '2-2-3',
  //             name: 'Books',
  //             icon: '📚',
  //             children: [
  //               { id: '2-2-3-1', name: 'Fiction', icon: '📖' },
  //               { id: '2-2-3-2', name: 'Non-Fiction', icon: '📓' },
  //             ],
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: '3',
  //     name: 'Settings',
  //     icon: '⚙️',
  //     children: [
  //       { id: '3-1', name: 'Account', icon: '👤', route: '/settings' },
  //       { id: '3-2', name: 'Security', icon: '🔒' },
  //       {
  //         id: '3-3',
  //         name: 'Preferences',
  //         icon: '🎛️',
  //         children: [
  //           { id: '3-3-1', name: 'Theme', icon: '🎨' },
  //           { id: '3-3-2', name: 'Language', icon: '🌐' },
  //         ],
  //       },
  //     ],
  //   },
  // ];
}
