import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NavigationModule } from '../shared/navigation/navigation.module';

import { GamesdisplayRoutingModule } from './gamesdisplay-routing.module';
import { LeaguesDisplayComponent } from './leagues-display/leagues-display.component';
import { GamesdisplayComponent } from './gamesdisplay.component';
import { DevAddLeaguesComponent } from './dev-add-leagues/dev-add-leagues.component';


@NgModule({
  declarations: [
    LeaguesDisplayComponent,
    GamesdisplayComponent,
    DevAddLeaguesComponent,
  ],
  imports: [
    CommonModule,
    NavigationModule,
    GamesdisplayRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    LeaguesDisplayComponent,
    DevAddLeaguesComponent,
  ]
})
export class GamesdisplayModule { }
