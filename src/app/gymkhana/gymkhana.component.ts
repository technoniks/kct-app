import { UploadService } from './../service/upload.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gymkhana',
  templateUrl: './gymkhana.component.html',
  styleUrls: ['./gymkhana.component.css']
})
export class GymkhanaComponent implements OnInit {

  constructor(private service: UploadService) { }

  ngOnInit() {
  }

}
