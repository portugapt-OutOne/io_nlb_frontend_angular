import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesdisplayRoutingModule } from './gamesdisplay/gamesdisplay-routing.module';

const routes: Routes = [
  {
    path: "",
    redirectTo: "/league-games",
    pathMatch: "full"
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), GamesdisplayRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
