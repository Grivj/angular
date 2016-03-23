import {Component} from 'angular2/core';
import {NamesService} from '../services/names.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/templates/app.html',
    providers: [NamesService]
})
export class AppComponent {
  names: Array<Object>;
  projects: Array<Object>;

  constructor(private _namesService: NamesService) {
  }

  // Single request example
  getNames() {
    this._namesService.getNames().subscribe(
      (names) => {
        console.log(names);
        this.names = names;
      },
      (err) => {
        console.warn(err)
      },
      () => {
        console.log("Names request done")
      }
    );
  }

  // Multiple requests example
  getNamesAndProjects() {
    this._namesService.getNamesAndProjects().subscribe(
      (data) => {
        console.log("names : ", data[0]);
        this.names = data[0];
        console.log("projects : ", data[1]);
        this.projects = data[1];
      },
      (err) => {
        console.warn(err);
      },
      () => {
        console.log("Names and projects requests done")
      }
    );
  }
}