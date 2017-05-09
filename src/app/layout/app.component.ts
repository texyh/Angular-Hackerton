import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string;

  constructor(private _router: Router) {}

   private getTitle(path): string {
        let value = '';

        switch (path) {
            case '/gallery':
                value = 'Gallery';
                break;

            case '/upload':
                value = 'Upload';
                break;
            default:
                value = 'Current Page';
        }

        return value;
   }

   ngOnInit() {
     this._router.events.subscribe((data: any) => {
                this.title = this.getTitle(data.url);
            });
   }

}
