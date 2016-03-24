import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
  selector: 'list',
  templateUrl: 'app/templates/list.html'
})
export class ListComponent {
  @Output() optionSelected = new EventEmitter();

  selectOption(option: Number) {
    console.log("selected option ", option);
    this.optionSelected.emit(option);
  }
}