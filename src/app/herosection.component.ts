import { Component } from '@angular/core';

@Component({
  selector: 'app-herosection',
  template: `
<section
  id="heroSection"
  class="section container.is-medium"
></section>
  `,
  styles: [
    `
    #heroSection {
    background-image: url(/assets/images/Hero.png);
    background-position: center;
    background-size: 90%;
    background-repeat: no-repeat;
    height: 350px;
    }
    @media screen and (max-width: 575px) {
	#heroSection {
		background-image: url(/assets/images/HeroMobile.png);
		background-size: cover
	}
}
    `
  ]
})
export class HerosectionComponent {

}
