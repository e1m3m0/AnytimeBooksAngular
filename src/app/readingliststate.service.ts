import {
  Injectable
}
from '@angular/core';
import {
  LocalService
}
from './local.service';

@Injectable({ providedIn: 'root' }) export class ReadingliststateService {
  readingState:any 
  
  constructor(private localStore: LocalService) {}

  addToReadingList(book) {
    this.readingState.push(book[0]) 
    this.saveToLocalStorage(this.readingState)
  }

  saveToLocalStorage(value) {
    this.localStore.saveData('AnytimeBooksKey', JSON.stringify(value))
  }

  checkStatus(id:number) {
    for(let i = 0; i < this.readingState.length; i++) {
      if (this.readingState[i].primary_isbn10 === id) {
        return true
      }
    }
    return false
  }
}
