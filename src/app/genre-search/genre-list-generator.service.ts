import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenreListGeneratorService {


  constructor(private http: HttpClient) { }

  getGenreList () {
    return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${environment.apiKey}`)
  }

  getBook (author, isbn10) {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${author}+isbn:${isbn10}&key=${environment.googleKey}`)
  }
 
  getRecommendedBooks (list) {
    return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/current/${list}.json?api-key=${environment.apiKey}`)
  }
}
