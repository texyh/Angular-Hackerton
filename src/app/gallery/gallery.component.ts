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
	title = 'PreView Image';
	images: any[];
	gridView = true;

	constructor(private _dataService: DataService,
		private _loaderService: LoaderService) { }

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

	close() {
		this.modal.close();
		this.selectedImage = null;
	}

	deleteImage(id: string) {
		this._loaderService.show();
		this._dataService.deleteImage(id).subscribe(x => {
			this.removeDeletedImage(id);
			this._loaderService.hide();
			this.modal.close();
			this.selectedImage = null;
		}, err => {
			this._loaderService.hide();
		})
	}

	removeDeletedImage(id: string) {
		_.remove(this.images, x => {
			return (x._id === id);
		})
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
