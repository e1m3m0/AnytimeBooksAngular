import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenreListGeneratorService } from '../genre-search/genre-list-generator.service';
import { faBookmark } from '@fortawesome/free-regular-svg-icons';
import { LocalService } from '../local.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-recommended-books',
  templateUrl: './recommended-books.component.html',
  styleUrls: ['./recommended-books.component.css']
})
export class RecommendedBooksComponent {
books: any; 
faBookmark = faBookmark


constructor(private route: ActivatedRoute, private http: GenreListGeneratorService, public localStore: LocalService) {}

ngOnInit(){
  this.route.paramMap.subscribe(params => {     
    this.http.getRecommendedBooks(params.get('list')).subscribe((data:any) => {
      this.books = data.results.books
    })
  })
}

saveBook(id){
  for (let i = 0; i < this.books.length; i++) {
    if (this.books[i].primary_isbn10 == id){
      let singleBook = this.books.slice(i,i+1)
      this.localStore.addToReadingList(singleBook, environment.saved)
    }
  }
}
}



