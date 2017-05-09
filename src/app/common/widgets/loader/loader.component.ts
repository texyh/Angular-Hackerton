import { Component  } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html'
})
export class LoaderComponent {
    show = false;

    constructor(private _loader: LoaderService) {
        _loader.event.subscribe(showSpinner => {
            this.show = showSpinner;
        });
    }
}
