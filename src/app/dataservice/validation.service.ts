import { Injectable } from '@angular/core';

@Injectable()
export class ValidationService {

  constructor() { }
  //USE THIS SERVICE TO VALIDATE BEFORE UPLOADING
  validateImageUplaod(data){
    if(data.title != undefined || data.file != undefined){
      return true
    }else{
      return false
    }
  }
}
