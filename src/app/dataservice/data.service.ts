import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http'
import 'rxjs/add/operator/map';


@Injectable()
export class DataService {

 BASE_URL = "https://wt-b54e0d7f3482fd14f72ca525b53ebb36-0.run.webtask.io"

  constructor(public _http:Http) { }
  loadImages(){
    let header = new Headers()
    header.append('Content-Type','application/json')
    return this._http.get(this.BASE_URL+'/ng-hack-backend/images', {headers: header})
              .map(res => res.json())
  }
  uploadImage(data){
    let header = new Headers()
    header.append('Content-Type','application/json')
    return this._http.post(this.BASE_URL+'/ng-hack-backend', {headers: header})
              .map(res => res.json())
  }
}
