import { Component, OnInit } from '@angular/core';
import { count } from 'rxjs';
declare interface RouteInfo {
  path: string;
  title: string;
  class: string;
  icon: string;
}
export const ROUTES: RouteInfo[] = [];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  menuItems: any[] = [
    { path: 'profile', title: 'Client Profile', class: 'list-group-item list-group-item-action py-2 ripple ', icon: '' },
    { path: 'document', title: 'Client Documents', class: 'list-group-item list-group-item-action py-2 ripple', icon: '' },
  ];
  ngOnInit(): void {
  }
}
