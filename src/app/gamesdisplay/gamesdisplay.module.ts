import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GamesdisplayRoutingModule } from './gamesdisplay-routing.module';
import { LeaguesDisplayComponent } from './leagues-display/leagues-display.component';
import { GamesdisplayComponent } from './gamesdisplay.component';


@NgModule({
  declarations: [
    LeaguesDisplayComponent,
    GamesdisplayComponent,
  ],
  imports: [
    CommonModule,
    GamesdisplayRoutingModule
  ],
  exports: [
    LeaguesDisplayComponent,
  ]
})
export class GamesdisplayModule { }
