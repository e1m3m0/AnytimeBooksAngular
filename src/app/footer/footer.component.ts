import {Component} from '@angular/core';

@Component({
  selector: 'app-footer', 
  template: `
    <footer class=" has-background-white">
      <div class="footer content has-text-centered has-text-success has-text-weight-bold">
        <a class="has-text-success"routerLink="/about">
          <p>Anytime Books by: ©2021 Gjonbalaj, Maki, Mateo, Powers, Winslow</p>
        </a>
      </div>
    </footer>
  `, 
  styles: [`
    .footer {
      box-shadow: 1px 1px 10px rgb(46, 46, 46);
      background-image: url(../../assets/images/FooterCropped.png);
      background-size: cover;
      background-position: center;
    background-repeat: no-repeat;
    }
  `]
})

export class FooterComponent {}
