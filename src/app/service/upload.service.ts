import { GalleryImg } from './../shared-folder/gallery.img';
import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/storage';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor( private db: AngularFireDatabase) { }

  private basePath:string = 'kct-db/uploads';
  private imgPath:string = 'gs://k-c-t-bacef.appspot.com/kct-db/images/'

  pushUpload(upload: GalleryImg) {
    let storageRef = firebase.storage().ref();
    let uploadTask = storageRef.child(`${this.basePath}/${upload.file.name}`).put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      (snapshot) =>  {
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100
      },
      (error) => {
        // upload failed
        console.log(error)
      },
      () => {
        // upload success
        uploadTask.snapshot.ref.getDownloadURL().then((url) => {
          upload.url = url
          upload.name = upload.file.name
          this.saveFileData(upload)
        })
       
      }
    );
  }

  // Writes the file details to the realtime db
  private saveFileData(upload: GalleryImg) {
    this.db.list(`${this.basePath}/`).push({
      name:upload.name,
      imgUrl:upload.url,
      date:new Date().toDateString(),
      detail:upload.detail
    });
  }
  getImages(){
    return this.db.list("kct-db/uploads")
  }
  getGymkhana(){
    return this.db.list("kct-db/gymkhana")
  }

}
