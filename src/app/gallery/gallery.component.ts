import {Component, Input , ViewChild} from '@angular/core';
import { ModalComponent } from '../common/widgets/modalComponent/modal.component';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',

  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
   @ViewChild(ModalComponent)
   private modal: ModalComponent;

   @Input()
	 datasource;

   selectedImage: any;
	 title = 'image name';

   host: {'(window:keydown)': 'hotkeys($event)'}

   setSelectedImage(image) {
      this.selectedImage = image;
   }

	 show(image: any) {
			this.selectedImage = image;
			this.modal.show();
	 }

   navigate(forward) {
   var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
   if (index >= 0 && index < this.datasource.length){
      this.selectedImage = this.datasource[index];	
   }
  }

}