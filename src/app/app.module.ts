import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SanctuaryComponent } from './components/sanctuary/sanctuary.component';
import { TempleComponent } from './components/temple/temple.component';

@NgModule({
  declarations: [
    AppComponent,
    SanctuaryComponent,
    TempleComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
