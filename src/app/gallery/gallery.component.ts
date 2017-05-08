import {Component, Input} from '@angular/core';
 
@Component({
  selector: 'gallery',
  template: `
  <h1 class="page-header text-center" style="color:#008080;">Image Gallery</h1>
  	<div class="row">
  		<button class="btn btn-primary pull-btn-right" style="margin-left: 86%;margin-top: 2%;background-color:#008080 !important;">Upload</button>
  	</div>
	<div class="modal fade" id="selectedImageModal" >
	  <div class="modal-dialog" role="document">
	    <div class="modal-content">
	      <div class="modal-body">
	      	   <div class="row"><span class="pull-right glyphicon glyphicon-trash" style="color:red;width:50px;"></span></div>
		       <div class="selectedImage" *ngIf="selectedImage">
		         <img src="{{selectedImage.url}}" style="width:500px;position:relative;">
			    </div>
			    <div class="row" style="margin-top:2%;">
			    	<div class="col-md-1"></div>
			    	<div class="col-md-4 text-center" style="opacity:0.9;background-color:#008080;padding:10px;cursor:pointer;color:white;" (click)=navigate(false)>
				      &lt;
				    </div>
				    <div class="col-md-2"></div>
				    <div class="col-md-4 text-center" style="opacity:0.9;background-color:#008080;padding:10px;cursor:pointer;color:white;" (click)=navigate(true)>
				      &gt;
				    </div>
				    <div class="col-md-1"></div>
			    </div>
	      </div>
	    </div>
	  </div>
	</div>
  	<ul id="thumbnailsList">
  	   <li *ngFor="let image of datasource" >
  	      <img src="{{image.url}}" class="tn"
  		  width="191" height="146"  
  		  data-toggle="modal" data-target="#selectedImageModal"
                  (click)=setSelectedImage(image)>
  	   </li>
  	</ul>
  `,
  styles: [`
  	ul { padding:0; width:780px; margin:20px auto}
  	li { display:inline;}
        .tn{ 
	   margin:2px 0px;
	   box-shadow:#999 1px 1px 3px 1px; 
	   cursor: pointer 
        }
  	.modal-content {
	    width: 670px !important;
	}
  `]
})
export class GalleryComponent { 
 
   @Input() datasource;
   selectedImage;
   host: {'(window:keydown)': 'hotkeys($event)'}

   setSelectedImage(image){
      this.selectedImage= image;	
   }
   navigate(forward){
   var index = this.datasource.indexOf(this.selectedImage)+(forward ? 1: -1);
   if(index >= 0 && index < this.datasource.length){
      this.selectedImage = this.datasource[index];	
   }
  }
	hotkeys(event){
	   if(this.selectedImage){
	      if (event.keyCode == 37){
	         this.navigate(false);
	      }else if(event.keyCode == 39){
	         this.navigate(true);
	      }
	   }
	}


}