import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class DataService {

private BASE_URL = " https://wt-b54e0d7f3482fd14f72ca525b53ebb36-0.run.webtask.io/ng-hack-backend/images"

  constructor(public _http:Http) { }

  loadImages(){
    // let header = new Headers()
    // header.append('Content-Type','application/json')
    return this._http.get(this.BASE_URL)
              .map(res => res.json())
  }

  saveImage(file: File): Observable<string> {
        // const headers = new Headers();
        const formData = new FormData();
        // headers.set('enctype', 'multipart/form-data');
        formData.append('name', file.name);
        formData.append('image', file);
        return this._http.post(this.BASE_URL, formData).map(x => x.json());
    }
}
