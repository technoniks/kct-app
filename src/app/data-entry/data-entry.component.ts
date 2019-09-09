import { EventModel, Sports } from './../shared-folder/event.model';
import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UploadService } from '../service/upload.service';
import { GalleryImg } from '../shared-folder/gallery.img';

@Component({
  selector: 'app-data-entry',
  templateUrl: './data-entry.component.html',
  styleUrls: ['./data-entry.component.css']
})
export class DataEntryComponent implements OnInit {

  types:string[]
  genders:string[]
  sessions:string[]
  sports:string[]
  years:string[]
  branches:string[]
  scores:number[]
  points:number[]

  entryType: string = "eventEntry"
  selectedFiles: FileList;
  currentUpload: GalleryImg;
  detail:string

  constructor(private dataService: DataService,private upSvc: UploadService
  ) { }

  detectFiles(event: any) {
    this.selectedFiles = event.target.files;
}

uploadSingle() {
  console.log(this.detail)
  let file = this.selectedFiles.item(0)
  this.currentUpload = new GalleryImg(file,this.detail);
  this.upSvc.pushUpload(this.currentUpload)
}
  ngOnInit() {
    this.dataService.getData();
    this.types = Sports.sportTypes
    this.genders = Sports.genders
    this.sessions = Sports.sessions
    this.sports = Sports.sports    
    this.years = Sports.years
    this.branches = Sports.branches
    this.scores = Sports.score
    this.points = Sports.points
  }

  onSubmit(event: NgForm){
     this.dataService.insertData(event.value);
     console.log(event)
     this.resetEvent()
  }
 resetEvent(event?:NgForm){
  if(event != null)
    event.reset()
  this.dataService.selectedEvent = {
    $key:null,
    entryType:this.entryType,
    date:new Date().toDateString(),
    type:'',
    gender:'',
    session:'',
    sport:'',
    winner:'',
    winnerYear:'',
    winnerBranch:'',
    winnerScore:0,
    winnerPoint:0,
    runner:'',
    runnerYear:'',
    runnerBranch:'',
    runnerScore:0,
    runnerPoint:0,
    notice:""
  }
 }
}
