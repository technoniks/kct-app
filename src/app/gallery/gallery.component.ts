import { AngularFireList } from '@angular/fire/database';
import { GalleryImg } from './../shared-folder/gallery.img';
import { Component, OnInit } from '@angular/core';
import { UploadService } from '../service/upload.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

 
  images: Observable<{}[]>
  constructor(private upSvc: UploadService) {}

  ngOnInit(){
    this.getImages()
  }
 
  getImages(){
    this.images = this.upSvc.getImages().valueChanges()
  }

}
