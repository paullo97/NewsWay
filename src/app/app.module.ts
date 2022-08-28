import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatRippleModule } from '@angular/material/core';
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCardComponent } from './components/list-card/list-card.component';
import { ListComponent } from './components/list/list.component';
import { CoreModule } from './core/core.module';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    BrowserAnimationsModule,
    MatRippleModule,
    MatDialogModule,
    EffectsModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
