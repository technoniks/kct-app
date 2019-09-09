import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';
import { Sports } from '../shared-folder/event.model';

@Component({
  selector: 'graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  scores:number[] = [0,0,0,0,0,0,0]
  chartType: string = 'pie';
  type:string = 'bar';
  chartDatasets: Array<any> 
  isLoadData:boolean = false

  constructor(private service: DataService) { }

  ngOnInit() {
  
    this.service.getData().valueChanges()
    .subscribe(responce=>{
      var i:any
      var j:any
      for(j in Sports.branches){
        for(i in responce){
          if(responce[i].winnerBranch==Sports.branches[j]){
            this.scores[j] = this.scores[j] + Number(responce[i].winnerPoint)
          }
          if(responce[i].runnerBranch==Sports.branches[j]){
            this.scores[j] = this.scores[j] + Number(responce[i].runnerPoint)
          }
        }
        console.log(Sports.branches[j]+":"+this.scores[j])
      }
      console.log(this.scores[0])
      
      this.chartDatasets= [
        { data: this.scores, label: 'KCT Score' }
      ];
      this.isLoadData = true
    })
  }
  
   
  public chartLabels: Array<any> = Sports.branches;

  public chartColors: Array<any> = [
    {
      backgroundColor: [
        '#00cc00',
        '#990000',
        '#000099',
        '#000000',
        '#0000ff',
        '#ffffff',
        '#66b3ff'
      ],
      borderColor: [
        '#d9d9d9',
        '#d9d9d9',
        '#d9d9d9',
        '#d9d9d9',
        '#d9d9d9',
        '#d9d9d9',
        '#d9d9d9'
      ],
      borderWidth: 2,
    }
  ];

  

  public chartOptions: any = {
    responsive: true
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }
  

}
