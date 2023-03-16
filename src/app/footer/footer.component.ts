import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
<footer class="footer has-background-white">
  <div class="content has-text-centered has-text-success has-text-weight-bold">
    <p>
      <a class="footerImage is-9by1">
        <img src="assets/images/FooterCropped.png" alt="footer image" />
      </a>
      Anytime Books by: ©2021 Gjonbalaj, Maki, Mateo, Powers, Winslow
    </p>
  </div>
</footer>

  `,
  styles: [
    `
    .footerImage {
	max-height: 45%;
}
    `
  ]
})
export class FooterComponent {

}
