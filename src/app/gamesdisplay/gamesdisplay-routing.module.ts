import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesdisplayComponent } from './gamesdisplay.component';
import { LeaguesDisplayComponent } from './leagues-display/leagues-display.component';

import { DevAddLeaguesComponent } from './dev-add-leagues/dev-add-leagues.component';

const routes: Routes = [
  {
    path: 'league-games',
    component: GamesdisplayComponent,
    children: [
      { path: '', component: LeaguesDisplayComponent},
      { path: 'add', component: DevAddLeaguesComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesdisplayRoutingModule { }
