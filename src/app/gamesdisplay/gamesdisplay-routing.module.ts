import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GamesdisplayComponent } from './gamesdisplay.component';
import { LeaguesDisplayComponent } from './leagues-display/leagues-display.component';

const routes: Routes = [
  {
    path: 'league-games',
    component: GamesdisplayComponent,
    children: [
      { path: '', redirectTo: 'feat1', pathMatch: 'full' },
      { path: 'feat1', component: LeaguesDisplayComponent }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesdisplayRoutingModule { }
