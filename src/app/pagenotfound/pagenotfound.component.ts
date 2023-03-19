import { Component } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
    <p class="title is-2 has-text-centered has-text-danger m-5 p-5">
      PAGE NOT FOUND 404 ERROR!
    </p>
    <p class="has-text-centered m-5 p-5"><a class='has-text-success title is-3 ' routerLink="/home">Return Home</a></p>
  `,
  styles: [
  ]
})
export class PagenotfoundComponent {

}
