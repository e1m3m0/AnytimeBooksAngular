import { HerosectionComponent } from "./genre-search/herosection.component"
import { GenreSearchComponent } from "./genre-search/genre-search.component"
import { AboutusComponent } from "./aboutus/aboutus.component"
import { RecommendedBooksComponent } from "./recommended-books/recommended-books.component"

export const routingTable = [
  {path:'search', component: GenreSearchComponent},
  {path:'', component: GenreSearchComponent},
  {path:'about', component: AboutusComponent},
  {path:'bookstosave/:list', component: RecommendedBooksComponent}
]