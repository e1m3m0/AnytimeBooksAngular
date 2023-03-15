import { Component, ViewChild, ElementRef } from '@angular/core';
import { LocalService } from './local.service';
import { ReadingliststateService } from './readingliststate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AnytimeBooksAngular';
  readingList = [
    {
        "primary_isbn10": "0143130609",
        "publisher": "Sentinel",
        "description": "The story of the Culper spy ring, which aided the American cause during the Revolution.",
        "title": "GEORGE WASHINGTON'S SECRET SIX",
        "author": "Brian Kilmeade and Don Yaeger",
        "book_image": "https://storage.googleapis.com/du-prd/books/images/9780698137653.jpg",
        "buy_links": [
            {
                "name": "Amazon",
                "url": "http://www.amazon.com/George-Washingtons-Secret-Six-Revolution-ebook/dp/B00C5R7FP4?tag=NYTBSREV-20"
            },
            {
                "name": "Apple Books",
                "url": "https://goto.applebooks.apple/9780143130604?at=10lIEQ"
            },
            {
                "name": "Barnes and Noble",
                "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780143130604"
            },
            {
                "name": "Books-A-Million",
                "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FGEORGE%252BWASHINGTON%252527S%252BSECRET%252BSIX%252FBrian%252BKilmeade%252Band%252BDon%252BYaeger%252F9780143130604&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DGEORGE%252BWASHINGTON%252527S%252BSECRET%252BSIX%252BBrian%252BKilmeade%252Band%252BDon%252BYaeger"
            },
            {
                "name": "Bookshop",
                "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780143130604&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DGEORGE%2BWASHINGTON%2527S%2BSECRET%2BSIX"
            },
            {
                "name": "IndieBound",
                "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780143130604%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DGEORGE%2BWASHINGTON%2527S%2BSECRET%2BSIX%2BBrian%2BKilmeade%2Band%2BDon%2BYaeger%26aff%3DNYT"
            }
        ],
    },
  {
      "primary_isbn10": "0345805976",
      "publisher": "Anchor",
      "description": "A Pulitzer Prize-winning journalist's biography of Adolf Tolkachev, who spied for the United States inside the Soviet Union.",
      "title": "THE BILLION DOLLAR SPY",
      "author": "David E Hoffman",
      "book_image": "https://storage.googleapis.com/du-prd/books/images/9780385537612.jpg",
      "buy_links": [
          {
              "name": "Amazon",
              "url": "http://www.amazon.com/The-Billion-Dollar-Spy-Espionage/dp/0385537603?tag=NYTBSREV-20"
          },
          {
              "name": "Apple Books",
              "url": "https://goto.applebooks.apple/9780345805973?at=10lIEQ"
          },
          {
              "name": "Barnes and Noble",
              "url": "https://www.anrdoezrs.net/click-7990613-11819508?url=https%3A%2F%2Fwww.barnesandnoble.com%2Fw%2F%3Fean%3D9780345805973"
          },
          {
              "name": "Books-A-Million",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fp%252FTHE%252BBILLION%252BDOLLAR%252BSPY%252FDavid%252BE%252BHoffman%252F9780345805973&url2=https%3A%2F%2Fwww.anrdoezrs.net%2Fclick-7990613-35140%3Furl%3Dhttps%253A%252F%252Fwww.booksamillion.com%252Fsearch%253Fquery%253DTHE%252BBILLION%252BDOLLAR%252BSPY%252BDavid%252BE%252BHoffman"
          },
          {
              "name": "Bookshop",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fbookshop.org%2Fa%2F3546%2F9780345805973&url2=https%3A%2F%2Fbookshop.org%2Fbooks%3Faffiliate%3D3546%26keywords%3DTHE%2BBILLION%2BDOLLAR%2BSPY"
          },
          {
              "name": "IndieBound",
              "url": "https://du-gae-books-dot-nyt-du-prd.appspot.com/redirect?url1=https%3A%2F%2Fwww.indiebound.org%2Fbook%2F9780345805973%3Faff%3DNYT&url2=https%3A%2F%2Fwww.indiebound.org%2Fsearch%2Fbook%3Fkeys%3DTHE%2BBILLION%2BDOLLAR%2BSPY%2BDavid%2BE%2BHoffman%26aff%3DNYT"
          }
      ],
  }
]


  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;
 
  constructor (private localStore: LocalService, public readingState: ReadingliststateService) {}

  ngOnInit () {
    // this.localStore.saveData('AnytimeBooksKey', JSON.stringify(this.readingList))
    this.readingState.readingState = this.localStore.getData('AnytimeBooksKey') 
    console.log(this.readingState.readingState)
   }

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

  getReadingList() {
  

  }
  testLocal() {
     
  }


}
