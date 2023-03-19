import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../local.service';


@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.css']
})
export class ReadinglistComponent {
  readingList: any
   
  constructor(public localStore: LocalService, private router: Router){}

  ngOnInit() {
      this.readingList = this.localStore.readingState
  }

  reviewBook(id) {
    this.router.navigate(['/book', id])
  }
 
}
