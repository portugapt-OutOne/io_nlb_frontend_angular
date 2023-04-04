import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

import { NavigationComponent } from './navbar/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDrawerComponent } from './sidebar-drawer/sidebar-drawer.component';


@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    SidebarDrawerComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports: [
    NavigationComponent,
    SidebarComponent,
  ]
})
export class NavigationModule { }
