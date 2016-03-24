import {Component} from 'angular2/core';
import {ControlGroup, Control, FormBuilder, Validators} from 'angular2/common';
import {hpValidator} from '../validators/hpValidator';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html'
})
export class AppComponent {
  pokemonForm: ControlGroup;

  constructor(private _fb: FormBuilder) {

  }

  ngOnInit() {
    this.pokemonForm = this._fb.group({
      "name": ['', Validators.required],
      "description": ['', Validators.compose([
        Validators.required,
        Validators.maxLength(20)
      ])],
      "evolution": [''], // no validator but allow us to get the value in the end
      "hp": ['', hpValidator]
    });
  }

  submitPokemon() {
    console.log(this.pokemonForm.value);
  }
}