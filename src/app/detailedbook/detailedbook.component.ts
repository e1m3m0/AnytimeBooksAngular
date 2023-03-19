import {Component} from '@angular/core';
import {LocalService} from '../local.service';
import {ActivatedRoute} from '@angular/router';
import {GenreListGeneratorService} from '../genre-search/genre-list-generator.service';
import {map} from 'rxjs';
import {Router} from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({selector: 'app-detailedbook', templateUrl: './detailedbook.component.html', styleUrls: []})
export class DetailedbookComponent {
  detailedBook;

  constructor(private route : ActivatedRoute, private http : GenreListGeneratorService, public localStore : LocalService, private router : Router) {}
  // On load of component take parameter and obtain additional from Google Books API to load on page
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.detailedFind(params.get('id'))
      this.http.getBook(this.detailedBook.author, this.detailedBook.primary_isbn10).pipe(map((mdata : any) => {
        return mdata.items[0].volumeInfo
      })).subscribe(googleData => {
        console.log(googleData)
        this.detailedBook.extDescription = googleData.description
        this.detailedBook.pageCount = googleData.pageCount
        this.detailedBook.subtitle = googleData.subtitle
        this.detailedBook.rating = googleData.averageRating
        console.log(this.detailedBook)
      })
    })
  }

  detailedFind(id) {
    for (let i = 0; i < this.localStore.readingState.length; i++) {
      if (this.localStore.readingState[i].primary_isbn10 == id) {
        this.detailedBook = this.localStore.readingState[i]
      }
    }
  }

  removeFromList(id) {
    for (let i = 0; i < this.localStore.readingState.length; i++) {
      if (this.localStore.readingState[i].primary_isbn10 === id) {
        this.localStore.readingState.splice(i, 1)
        this.localStore.saveToLocalStorage(environment.saved, this.localStore.readingState)
        this.router.navigate(['/savedbooks'])
      }
    }
  }
  goBack(){
    this.router.navigate(['/savedbooks'])
  }
}
