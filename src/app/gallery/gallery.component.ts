import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { ModalComponent } from '../common/widgets/modalComponent/modal.component';
import { DataService } from '../dataservice/data.service';
import { LoaderService } from '../common/widgets/loader/loader.service';

import * as _ from 'lodash';


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
	images: any[];
	gridView = true;

	constructor(private _dataService: DataService,
		private _loaderService: LoaderService) { }

	host: { '(window:keydown)': 'hotkeys($event)' }

	setSelectedImage(image) {
		this.selectedImage = image;
	}

	show(image: any) {
		this.selectedImage = image;
		this.modal.show();
	}

	changeView(option) {
		this.gridView = option;
	}

	deleteImage(id: string) {
		this._loaderService.show();
		this._dataService.deleteImage(id).subscribe(x => {
			this.removeDeletedImage(id);
			this._loaderService.hide();
			this.modal.close();
		}, err => {
			this._loaderService.hide();
		})
	}

	removeDeletedImage(id: string) {
		_.remove(this.images, x => {
			return (x._id === id);
		})
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
		this._loaderService.show();
		this._dataService.loadImages().subscribe(x => {
			this.images = x;
			this._loaderService.hide();
		}, err => {
			this._loaderService.hide();
		})
	}
}
