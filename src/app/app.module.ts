import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { GenreSearchComponent } from './genre-search/genre-search.component';
import { routingTable } from './routes';
import { HerosectionComponent } from './herosection/herosection.component';
import { AboutusComponent } from './aboutus/aboutus.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreSearchComponent,
    HerosectionComponent,
    AboutusComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule.forRoot(routingTable),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
