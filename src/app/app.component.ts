import { Component } from '@angular/core';
import { LocalService } from './local.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Anytime Books';
 
  constructor (private localStore: LocalService) {}

  ngOnInit () {
    this.localStore.readingState = this.localStore.getData(environment.saved) 
   }
}
