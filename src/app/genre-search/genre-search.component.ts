import { Component } from '@angular/core';
import { GenreListGeneratorService } from './genre-list-generator.service';
import { GenreList, GenreListWhole } from '../../models/Genrelist'
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-search',
  templateUrl: './genre-search.component.html',
  styleUrls: []
})
export class GenreSearchComponent {
  formGenreList: GenreList[] = [];
  model:any;

  constructor(private genreListService: GenreListGeneratorService, private router: Router) {}

  ngOnInit() {
    this.genreListService
      .getGenreList()
      .pipe(map((data:any) => {
        return data.results
      }))
      .subscribe((genreList: GenreListWhole[]) => {
        for (let i = 0; i < genreList.length; i++) {
          if (
            !genreList[i].display_name.includes('Combined') &&
            !genreList[i].display_name.includes('Hardcover') &&
            !genreList[i].display_name.includes('Paperback') &&
            !genreList[i].display_name.includes('Audio') &&
            !genreList[i].display_name.includes('E-Book') &&
            !genreList[i].display_name.includes('Monthly')
          ) {
            this.formGenreList.push({
              display_name: genreList[i].display_name,
              list_name_encoded: genreList[i].list_name_encoded,
            });
          }
        }
      });
  }

  submitGenre(genre){
    this.router.navigate(['/bookstosave', genre])    
  }
  

}
