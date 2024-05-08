import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  @ViewChild('widgetContainer', { read: ViewContainerRef, static: true })
  widgetContainer!: ViewContainerRef;

  addWidget(name: string) {
    loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      exposedModule: name,
    }).then(m => {
      this.widgetContainer.createComponent(m[name]);
    });
  }
}
