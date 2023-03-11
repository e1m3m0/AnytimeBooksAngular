import { HerosectionComponent } from "./herosection/herosection.component"
import { GenreSearchComponent } from "./genre-search/genre-search.component"
import { AboutusComponent } from "./aboutus/aboutus.component"

export const routingTable = [
  {path:'',component: HerosectionComponent},
  {path:'search', component: GenreSearchComponent},
  {path:'about', component: AboutusComponent}
]