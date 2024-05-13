import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent {
  actions = [
    {
      label: 'Chart',
      component: 'ChartComponent',
    },
    {
      label: 'KPI',
      component: 'KpiComponent',
    },
  ];
  @ViewChild('widgetContainer', { read: ViewContainerRef, static: true })
  widgetContainer!: ViewContainerRef;

  addWidget(name: string) {
    loadRemoteModule({
      type: 'module',
      remoteEntry: `${window.location.hostname === 'localhost' ? 'http://localhost:4202' : '/widgets'}/remoteEntry.js`,
      exposedModule: name,
    }).then(m => {
      this.widgetContainer.createComponent(m[name]);
    });
  }
}
