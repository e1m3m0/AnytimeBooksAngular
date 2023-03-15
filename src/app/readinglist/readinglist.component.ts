import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReadingliststateService } from '../readingliststate.service';

@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.css']
})
export class ReadinglistComponent {
  readingList: any
  
  
  constructor(private activatedRoute:ActivatedRoute, public readingState: ReadingliststateService){}

  ngOnInit() {
    this.readingList = this.readingState.readingState
  
  }


}
