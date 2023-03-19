import { GenreSearchComponent } from "./genre-search/genre-search.component"
import { AboutusComponent } from "./aboutus/aboutus.component"
import { RecommendedBooksComponent } from "./recommended-books/recommended-books.component"
import { ReadinglistComponent } from "./readinglist/readinglist.component"
import { DetailedbookComponent } from "./detailedbook/detailedbook.component"
import { HomeComponent } from "./home/home.component"

export const routingTable = [
  {path:'search', component: GenreSearchComponent},
  {path:'', component: HomeComponent},
  {path:'about', component: AboutusComponent},
  {path:'bookstosave/:list', component: RecommendedBooksComponent},
  {path:'savedbooks', component: ReadinglistComponent},
  {path:'book/:id', component: DetailedbookComponent},
]