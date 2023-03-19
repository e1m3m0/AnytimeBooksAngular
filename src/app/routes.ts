import { GenreSearchComponent } from "./genre-search/genre-search.component"
import { AboutusComponent } from "./aboutus/aboutus.component"
import { RecommendedBooksComponent } from "./recommended-books/recommended-books.component"
import { ReadinglistComponent } from "./readinglist/readinglist.component"
import { DetailedbookComponent } from "./detailedbook/detailedbook.component"
import { HomeComponent } from "./home/home.component"
import { Routes } from "@angular/router"
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component"

export const routingTable: Routes = [  
  {path:'home', component: HomeComponent},
  {path:'search', component: GenreSearchComponent},
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'about', component: AboutusComponent},
  {path:'bookstosave/:list', component: RecommendedBooksComponent},
  {path:'savedbooks', component: ReadinglistComponent},
  {path:'book/:id', component: DetailedbookComponent},
  {path:'**', component: PagenotfoundComponent}
]