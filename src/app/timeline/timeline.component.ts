import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sports, EventModel } from '../shared-folder/event.model';
import { DataService } from '../service/data.service';
import { transition, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  animations:[
    trigger('fade',[
      transition('void => *',[
        style({opacity:0,height:'0px'}),
        animate(600,style({opacity:1,height:'auto'}))
      ])
    ])
  ]
})
export class TimelineComponent{
  selected:EventModel = null;
  winnerInfo:string[] = Sports.winnerInfo
  runnerInfo:string[] = Sports.runnerInfo
  events:Observable<{}[]>;
  course:any[];
  data: Observable<any[]>;
  constructor(private service: DataService) {
    this.events = service.getData().valueChanges()
    console.log(this.events);
  }
  onClick(event){
    if(this.selected==event){
      this.selected = null 
      return
    }
   this.selected = event
  }
 
}
