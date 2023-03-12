import { Component } from '@angular/core';
import { Books } from 'src/models/Books';
import { ActivatedRoute, Route } from '@angular/router';
import { GenreListGeneratorService } from '../genre-search/genre-list-generator.service';


@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent {
books: any; 

constructor(private route: ActivatedRoute, private http: GenreListGeneratorService) {}

ngOnInit(){
  this.route.paramMap.subscribe(params => {     
    this.http.getRecommendedBooks(params.get('list')).subscribe((data:any) => {
      this.books = data.results.books
      })
    })
}
}



