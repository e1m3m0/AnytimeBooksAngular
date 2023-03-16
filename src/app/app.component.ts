import { Component } from '@angular/core';
import { LocalService } from './local.service';
import { ReadingliststateService } from './readingliststate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Anytime Books';
 
  constructor (private localStore: LocalService, public readingState: ReadingliststateService) {}

  ngOnInit () {
    // this.localStore.saveData('AnytimeBooksKey', JSON.stringify(this.readingList))
    this.readingState.readingState = this.localStore.getData('AnytimeBooksKey') 
    console.log(this.readingState.readingState)
   }



  getReadingList() {
  

  }
  testLocal() {
     
  }


}
