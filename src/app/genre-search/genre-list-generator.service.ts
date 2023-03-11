import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GenreListGeneratorService {
  apiKey = "BLGvAn7JO1dxMb7GRWTLG00RNEZOGQMC";
  author = "Stephen King"
  isbn= 1668002175
  googleKey= "AIzaSyD10gq8yqLKQYK-Oz7ei1Iv6Ty10DDMgxU"
  userSelection= "hardcover-fiction"

  constructor(private http: HttpClient) { }

  getGenreList () {
    return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.apiKey}`)
  }

  getBook () {
    return this.http.get(`https://www.googleapis.com/books/v1/volumes?q=${this.author}+isbn:${this.isbn}&key=${this.googleKey}`)
  }

  getRecommendedBooks () {
    return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/current/${this.userSelection}.json?api-key=${this.apiKey}`)
  }
}
