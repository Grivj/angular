import {Component} from 'angular2/core';
import {ListComponent} from './list.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    directives: [ListComponent]
})
export class AppComponent {
  selected: Number;

  optionSelected(option: Number) {
    this.selected = option;
  }
}