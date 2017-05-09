import {Component} from '@angular/core';
import {DataService} from '../dataservice/data.service';

@Component({
    selector : 'app-upload',
    templateUrl: './upload.component.html'
})
export class UploadComponent {
    image: File;

    constructor(private _dataService: DataService) {
    }

    submit(image: any) {
           this._dataService.saveImage(image).subscribe (x => {
               console.log(x);
           });
    }
}
