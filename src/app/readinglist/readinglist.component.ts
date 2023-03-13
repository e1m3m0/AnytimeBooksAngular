import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-readinglist',
  templateUrl: './readinglist.component.html',
  styleUrls: ['./readinglist.component.css']
})
export class ReadinglistComponent {
  @Input() readingState;

  ngOnInit() {
    console.log(this.readingState)
  }


}
