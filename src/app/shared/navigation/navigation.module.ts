import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../../app-routing.module';

import { NavigationComponent } from './navbar/navigation.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarDrawerComponent } from './sidebar-drawer/sidebar-drawer.component';
import { DefaultContentComponent } from './default-content/default-content.component';


@NgModule({
  declarations: [
    NavigationComponent,
    SidebarComponent,
    SidebarDrawerComponent,
    DefaultContentComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [
    NavigationComponent,
    SidebarComponent,
  ]
})
export class NavigationModule { }
