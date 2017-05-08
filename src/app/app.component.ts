import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `
    <gallery [datasource]=images></gallery>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  images;
 
   constructor(){
      this.images = [
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"},
	{"url":"https://goo.gl/AClrVV"}
      ];
   }
}
