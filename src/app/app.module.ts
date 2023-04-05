import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

import { NavigationModule } from './shared/navigation/navigation.module';
import { GamesdisplayModule } from './gamesdisplay/gamesdisplay.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    NavigationModule,
    GamesdisplayModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {


}
