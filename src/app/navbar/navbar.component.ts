import { Component, ViewChild, ElementRef } from '@angular/core';
import { ReadingliststateService } from '../readingliststate.service';

@Component({
  selector: 'app-navbar',
  template: `
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <a class="navbar-item" routerLink="/">
      <img
        src="assets/images/AnytimeBooksLogoCase.png"
        alt="anytime logo"
        style="max-height: 75px; background-size: cover"
      />
    </a>

    <a (click)="toggleNavbar()" role="button" #navBurger class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div id="navbarBasicExample" class="navbar-menu" #navMenu>
    <div class="navbar-end">
      <div class="buttons">
        <a class="button is-primary" routerLink="/search">
          <strong>Search</strong>
        </a>
        <a class="button is-info" routerLink="/savedbooks">
          <strong>Reading List: {{this.readingState.readingState.length}}</strong>
        </a>
                <a class="button is-warning mr-3" routerLink="/about">
          <strong>About</strong>
        </a>
    </div>
    </div>
  </div>
</nav>
  `,
  styles: [
`
    .navbar {
	box-shadow: 1px 1px 10px rgb(46, 46, 46);
}
    `

  ]
})
export class NavbarComponent {
  @ViewChild('navBurger') navBurger: ElementRef;
  @ViewChild('navMenu') navMenu: ElementRef;


  constructor(public readingState: ReadingliststateService){}

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

}
