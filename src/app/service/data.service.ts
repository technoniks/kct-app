import { EventModel } from '../shared-folder/event.model';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { WebAnimationsDriver } from '@angular/animations/browser/src/render/web_animations/web_animations_driver';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  eventsList: AngularFireList<any> = null;
  selectedEvent:EventModel = new EventModel();
  sendEvent:EventModel = new EventModel();
  winner:string = ''
  runner:string = ''
  winnerYear:string = ''
  runnerYear:string = ''

  constructor(private db: AngularFireDatabase) { }

  getData(){
    this.eventsList = this.db.list('kct-db/event');
    return this.eventsList;
  }
  getPassword(){
    return this.db.list('kct-db/pw').valueChanges()
  }

  insertData(event: EventModel){
    
    if(event.type == 'Personal'){
      this.winner = event.winner
      this.runner = event.runner
      this.winnerYear = event.winnerYear
      this.runnerYear = event.runnerYear
    }
    if(event.type == 'Class'){
      this.winnerYear = event.winnerYear
      this.runnerYear = event.runnerYear
    }

    this.eventsList.push({

      date:new Date().toDateString(),

      type: event.type,
      gender: event.gender,
      session: event.session,
      sport: event.sport,

      winner: this.winner,
      winnerScore: event.winnerScore,
      winnerBranch: event.winnerBranch,
      winnerYear: this.winnerYear,
      winnerPoint: event.winnerPoint,

      runner: this.runner,
      runnerScore: event.runnerScore,
      runnerBranch: event.runnerBranch,
      runnerYear: this.runnerYear,
      runnerPoint: event.runnerPoint
    });
  }

  updateData(event: EventModel){
    this.eventsList.update(event.$key,
      {
        type: event.type,
        date: event.date,
        gender: event.gender,
        session: event.session,
        sport: event.sport,

        winnerPlayer: event.winner,
        winnerScore: event.winnerScore,
        winnerBranch: event.winnerBranch,
        winnerYear: event.winnerYear,

        runnerPlayer: event.runner,
        runnerScore: event.runnerScore,
        runnerBranch: event.runnerBranch,
        runnerYear: event.runnerYear
      })
  }

  deleteData($key: string){
    this.eventsList.remove($key);
  }

}
