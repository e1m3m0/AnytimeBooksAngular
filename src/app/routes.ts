import { GenreSearchComponent } from "./genre-search/genre-search.component"
import { AboutusComponent } from "./aboutus/aboutus.component"
import { RecommendedBooksComponent } from "./recommended-books/recommended-books.component"
import { ReadinglistComponent } from "./readinglist/readinglist.component"

export const routingTable = [
  {path:'search', component: GenreSearchComponent},
  {path:'', component: GenreSearchComponent},
  {path:'about', component: AboutusComponent},
  {path:'bookstosave/:list', component: RecommendedBooksComponent},
  {path:'savedbooks', component: ReadinglistComponent}
]