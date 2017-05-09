import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from '../common/widgets/modalComponent/modal.component';
import { DataService } from '../dataservice/data.service';


@Component({
	selector: 'app-gallery',
	templateUrl: './gallery.component.html',

	styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
	@ViewChild(ModalComponent)
	private modal: ModalComponent;

	selectedImage: any;
	title = 'image name';
	images:any[];

	constructor(private _dataService: DataService) {}

	host: { '(window:keydown)': 'hotkeys($event)' }

	setSelectedImage(image) {
		this.selectedImage = image;
	}

	show(image: any) {
		this.selectedImage = image;
		this.modal.show();
	}

	navigate(forward) {
		var index = this.images.indexOf(this.selectedImage) + (forward ? 1 : -1);
		if (index >= 0 && index < this.images.length) {
			this.selectedImage = this.images[index];
		}
	}

	hotkeys(event) {
		if (this.selectedImage) {
			if (event.keyCode == 37) {
				this.navigate(false);
			} else if (event.keyCode == 39) {
				this.navigate(true);
			}
		}
	}

	ngOnInit() {
		this._dataService.loadImages().subscribe(x => {
			this.images = x;
		})
	}


}