import {Component} from '@angular/core';
import {GenreListGeneratorService} from './genre-list-generator.service';
import {GenreList, GenreListWhole} from 'src/models/Genrelist';
import {pipe, pluck} from 'rxjs';

@Component({selector: 'app-root', templateUrl: './app.component.html', styleUrls: ['./app.component.css']})
export class AppComponent {
    title = 'AnytimeBooksAngular';

    formGenreList : GenreList[] = []

    constructor(private genreListService : GenreListGeneratorService) {}

    ngOnInit() {
        this.genreListService.getGenreList().pipe(pluck('results')).subscribe((genreList : GenreListWhole[]) => {
            for (let i = 0; i < genreList.length; i++) {
                if (!genreList[i].display_name.includes('Combined') && !genreList[i].display_name.includes('Hardcover') && !genreList[i].display_name.includes('Paperback') && !genreList[i].display_name.includes('Audio') && !genreList[i].display_name.includes('E-Book') && !genreList[i].display_name.includes('Monthly')) {

                    this.formGenreList.push({display_name: genreList[i].display_name, list_name_encoded: genreList[i].list_name_encoded})
                }
            }

        })
    }
}
