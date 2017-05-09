import { Component } from '@angular/core';
import { DataService } from '../dataservice/data.service';
import {LoaderService} from '../common/widgets/loader/loader.service';

@Component({
    selector: 'app-upload',
    templateUrl: './upload.component.html'
})
export class UploadComponent {
    image: File;

    constructor(private _dataService: DataService,
                private _loaderService: LoaderService) {
    }

    submit(image: any) {
        this._loaderService.show();
        this._dataService.saveImage(image).subscribe(x => {
            this._loaderService.hide();
            console.log(x);
        }, err => {
            this._loaderService.hide();
        });
    }
}
