import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images;

   constructor(){
      this.images = [
        	{"url":"https://goo.gl/T6eBLL"},
        	{"url":"https://goo.gl/GRjMGN"},
        	{"url":"https://goo.gl/T6eBLL"},
        	{"url":"https://goo.gl/GRjMGN"},
        	{"url":"https://goo.gl/ATjmQY"},
        	{"url":"https://goo.gl/GRjMGN"},
        	{"url":"https://goo.gl/T6eBLL"},
        	{"url":"https://goo.gl/ATjmQY"},
        	{"url":"https://goo.gl/T6eBLL"},
        	{"url":"https://goo.gl/GRjMGN"},
        	{"url":"https://goo.gl/ATjmQY"},
        	{"url":"https://goo.gl/T6eBLL"}
      ];
   }
}
