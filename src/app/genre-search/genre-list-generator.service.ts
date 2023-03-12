import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { HerosectionComponent } from './herosection.component';

@Injectable({
  providedIn: 'root'
})
export class GenreListGeneratorService {
  apiKey = "BLGvAn7JO1dxMb7GRWTLG00RNEZOGQMC";
  googleKey= "AIzaSyD10gq8yqLKQYK-Oz7ei1Iv6Ty10DDMgxU"

  constructor(private http: HttpClient) { }

  getGenreList () {
    return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.apiKey}`)
  }

  getBook (author, isbn10) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${author}+isbn:${isbn10}&key=${this.googleKey}`)
  }
 
  getRecommendedBooks (list) {
    return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${this.apiKey}`)
  }
}
