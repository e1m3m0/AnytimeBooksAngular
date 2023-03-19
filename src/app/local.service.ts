import {Injectable} from '@angular/core';
import {environment} from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class LocalService {
  readingState : any 
  
  constructor() {}
  
  public saveData(key : string, value : string) {
    localStorage.setItem(key, value);
  }
  public getData(key : string) {
    let data = localStorage.getItem(key) || "";
    if (data) {
      return JSON.parse(data)
    } else {
      return []
    }
  }
  public removeData(key : string) {
    localStorage.removeItem(key);
  }
  public clearData() {
    localStorage.clear();
  }
  addToReadingList(book, key) {
    this.readingState.push(book[0])
    this.saveToLocalStorage(key, this.readingState)
  }
  saveToLocalStorage(key, list) {
    this.removeData(key);
    this.saveData(key, JSON.stringify(list))
  }
  checkStatus(id : number) {
    for (let i = 0; i < this.readingState.length; i++) {
      if (this.readingState[i].primary_isbn10 === id) {
        return true
      }
    }
    return false
  }
}
