import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GenreListGeneratorService {
  apiKey = "BLGvAn7JO1dxMb7GRWTLG00RNEZOGQMC";

  constructor(private http: HttpClient) { }

  getGenreList () {
    return this.http.get(`https://api.nytimes.com/svc/books/v3/lists/names.json?api-key=${this.apiKey}`)
  }
}
