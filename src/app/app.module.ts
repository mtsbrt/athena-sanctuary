import { DialogInsideComponent } from './components/temple/dialog-inside/dialog-inside.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SanctuaryComponent } from './components/sanctuary/sanctuary.component';
import { TempleComponent } from './components/temple/temple.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    SanctuaryComponent,
    TempleComponent,
    DialogInsideComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule
  ],
  providers: [],
  entryComponents:[
    DialogInsideComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
