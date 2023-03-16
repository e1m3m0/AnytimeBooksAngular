import { Component } from '@angular/core';
import { ReadingliststateService } from '../readingliststate.service';
import { ActivatedRoute } from '@angular/router';
import { GenreListGeneratorService } from '../genre-search/genre-list-generator.service';


@Component({
  selector: 'app-detailedbook',
  templateUrl: './detailedbook.component.html',
  styleUrls: ['./detailedbook.component.css']
})
export class DetailedbookComponent {
  detailedBook;

  constructor(private route: ActivatedRoute, private http: GenreListGeneratorService, public readingState: ReadingliststateService) {}
  
  ngOnInit(){
    this.route.paramMap.subscribe(params => { 
      console.log(params)
      this.detailedFind(params.get('id'))
      console.log(this.detailedBook)
      
    })    

  }

  detailedFind(id){
    for (let i = 0; i < this.readingState.readingState.length; i++) {
      if (this.readingState.readingState[i].primary_isbn10 == id){
        this.detailedBook = this.readingState.readingState[i]  
      }
    }
  }

}
