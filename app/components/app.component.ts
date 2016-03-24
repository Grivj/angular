import {Component} from 'angular2/core';
import {NamesService} from '../services/names.service';
import {Observable} from 'rxjs/Rx';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    providers: [NamesService]
})
export class AppComponent {
  names: Observable<Object[]>;

  constructor(private _namesService: NamesService) {
  }

  // Single request example
  getNames() {
    this.names = this._namesService.getNames();
  }
}