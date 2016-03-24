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

  randomSelection() {
    this.selectOption(Math.floor(Math.random()*3) + 1);
  }
}