import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  navItems = [
    {
      label: 'Home',
      path: '/home',
    },
    {
      label: 'Dashboard',
      path: '/dashboard',
    },
  ];
}
