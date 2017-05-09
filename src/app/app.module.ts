import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { CloudinaryModule } from '@cloudinary/angular';
import * as Cloudinary from 'cloudinary-core'


import { AppComponent } from './layout/app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { UploadComponent } from './upload/upload.component';
import { ModalComponent } from './common/widgets/modalComponent/modal.component';
import { DataService } from './dataservice/data.service';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    ModalComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    RouterModule.forRoot([
      { path: '', redirectTo: 'gallery', pathMatch: 'full' },
      { path: 'gallery', component: GalleryComponent },
      { path: 'upload', component: UploadComponent },
      { path: '**', redirectTo: 'gallery' }
    ]),
    CloudinaryModule.forRoot(Cloudinary, { cloud_name: 'cloud_name' })
  ],
  providers: [
    DataService,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
