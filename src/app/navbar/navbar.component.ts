import {Component, ViewChild, ElementRef} from '@angular/core';
import {LocalService} from '../local.service';

@Component({selector: 'app-navbar', template: `
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
      <a class="button is-danger" routerLink="/">
          <strong>Home</strong>
        </a>
        <a class="button is-primary" routerLink="/search">
          <strong>Search</strong>
        </a>
        <button class="button is-info" [disabled]="this.localStore.readingState.length === 0" routerLink="/savedbooks">
          <strong>Reading List: {{this.localStore.readingState.length}}</strong>
        </button>
                <a class="button is-warning mr-3" routerLink="/about">
          <strong>About</strong>
        </a>
    </div>
    </div>
  </div>
</nav>
  `, styles: [`
    .navbar {
	box-shadow: 1px 1px 10px rgb(46, 46, 46);
}
    `]})
export class NavbarComponent {
  @ViewChild('navBurger')navBurger : ElementRef;
  @ViewChild('navMenu')navMenu : ElementRef;


  constructor(public localStore : LocalService) {}

  toggleNavbar() {
    this.navBurger.nativeElement.classList.toggle('is-active');
    this.navMenu.nativeElement.classList.toggle('is-active');
  }

}
