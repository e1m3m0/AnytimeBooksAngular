import { Component, ViewChild, ElementRef } from '@angular/core';
import { LocalService } from './local.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AnytimeBooksAngular';
  readingState: any
  readingList = [
    {
        "primary_isbn10": "1455565385",
        "publisher": "Grand Central",
        "description": "An oral history of the show, based on extensive interviews with Jon Stewart and others.",
        "title": "THE DAILY SHOW (THE BOOK)",
        "author": "Chris Smith",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9781455565382.jpg",
        "buy_links": [
            {
                "name": "Amazon",
                "url": "https://www.amazon.com/Daily-Show-Book-History-Correspondents/dp/1455565385?tag=NYTBSREV-20"
            },
            {
                "name": "Apple Books",
                "url": "https://goto.applebooks.apple/9781455565382?at=10lIEQ"
            },
            {
                "name": "Barnes and Noble",
                "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9781455565382"
            },
            {
                "name": "Books-A-Million",
                "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BDAILY%252BSHOW%252B%252528THE%252BBOOK%252529%252FChris%252BSmith%252F9781455565382&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BDAILY%252BSHOW%252B%252528THE%252BBOOK%252529%252BChris%252BSmith"
            },
            {
                "name": "Bookshop",
                "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9781455565382&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BDAILY%2BSHOW%2B%2528THE%2BBOOK%2529"
            },
            {
                "name": "IndieBound",
                "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9781455565382%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BDAILY%2BSHOW%2B%2528THE%2BBOOK%2529%2BChris%2BSmith%26aff%3DNYT"
            }
        ],
    }
]
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;

  constructor (private localStore: LocalService) {}

  ngOnInit () {
   this.readingState = this.localStore.getData('AnytimeBooks') 
   console.log(this.readingState)  
  }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  getReadingList() {
  

  }


}
