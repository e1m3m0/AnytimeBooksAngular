import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreListGeneratorService } from '../genre-search/genre-list-generator.service';
import { ReadingliststateService } from '../readingliststate.service';

@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent {
books: any; 
@Output() bookATF = new EventEmitter()

constructor(private route: ActivatedRoute, private http: GenreListGeneratorService, public readingState: ReadingliststateService) {}

ngOnInit(){
  this.route.paramMap.subscribe(params => {     
    this.http.getRecommendedBooks(params.get('list')).subscribe((data:any) => {
      this.books = data.results.books
      })
    })
}

testsplice(id){

  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].primary_isbn10 == id){
      let testArr = this.books.slice(i,i+1)
      this.readingState.addToReadingList(testArr)

    }
    
  }
}
}



