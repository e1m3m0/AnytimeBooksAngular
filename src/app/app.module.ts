import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router'


import { AppComponent } from './app.component';
import { GenreSearchComponent } from './genre-search/genre-search.component';
import { routingTable } from './routes';
import { HerosectionComponent } from './genre-search/herosection.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RecommendedBooksComponent } from './recommended-books/recommended-books.component';
import { ReadinglistComponent } from './readinglist/readinglist.component';

@NgModule({
  declarations: [
    AppComponent,
    GenreSearchComponent,
    HerosectionComponent,
    AboutusComponent,
    RecommendedBooksComponent,
    ReadinglistComponent,
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule, RouterModule.forRoot(routingTable),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
