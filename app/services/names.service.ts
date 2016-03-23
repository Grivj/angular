import {Http, Response} from 'angular2/http';
import {Observable} from 'rxjs/Rx';
import {Injectable} from 'angular2/core';

@Injectable()
export class NamesService {
  namesUrl: string = "https://api.myjson.com/bins/1n8py";
  projectsUrl: string = "https://api.myjson.com/bins/33tgu";

  constructor(private _http: Http) {

  }

  // Single request example
  getNames() {
    return this._http.get(this.namesUrl)
      .map((res: Response) => res.json());
  }

  // Multiple requests example
  getNamesAndProjects() {
    return Observable.forkJoin(
      this._http.get(this.namesUrl).map((res: Response) => res.json()),
      this._http.get(this.projectsUrl).map((res: Response) => res.json())
    );
  }
}