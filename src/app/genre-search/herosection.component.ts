import { Component } from '@angular/core';

@Component({
  selector: 'app-herosection',
  template: `
<section
  id="heroSection"
  class="section container.is-medium"
  style="
    background-image: url(/assets/images/Hero.png);
    background-position: center;
    background-size: 75%;
    background-repeat: no-repeat;
    height: 350px;
  "
></section>
  `,
  styles: [
  ]
})
export class HerosectionComponent {

}
