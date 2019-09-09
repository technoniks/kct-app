import { DataService } from './../service/data.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  onSelectAnything : EventEmitter<boolean> = new EventEmitter<boolean>();
  
  isSelectAnything:boolean = false
  isGymkhana:boolean = false
  isDeveloper:boolean = false
  isLogged:boolean = false
  isToggle = false
  placeholder = "enter password..."
  password:string
  data:string = ""
  constructor(private service:DataService) { }

  ngOnInit() {
    // this.service.getPassword().subscribe()
  }

  login(){
    this.service.getPassword().subscribe(pw => {
      this.password = pw.map(val=>{
        return val
      }).toString()
      console.log(this.data+" "+this.password)
      console.log(pw[0])
      if(this.data===pw[0]){
        console.log("success")
        this.isToggle = false
        this.isLogged = true
        this.data = null
      }else{
        console.log("fail retry")
        this.isLogged = false
        this.data = null
        this.placeholder = "wrong password..."
      }
    })
    

  }
  onLogoClick(){
    this.isLogged = !this.isLogged
    this.isDeveloper = false
    this.isGymkhana = false
    this.isToggle = false
    this.isSelectAnything = !this.isSelectAnything
    console.log(this.isSelectAnything)
    this.onSelectAnything.emit(this.isSelectAnything)
  }
  doubleClick(){
    if(this.isLogged){
      this.isToggle = false
    }else{
      this.isToggle = !this.isToggle
    }
    
    this.isDeveloper = false
    this.isGymkhana = false  
    this.isLogged = false  
    this.isSelectAnything = !this.isSelectAnything
    console.log(this.isSelectAnything)
    this.onSelectAnything.emit(this.isSelectAnything)
  }
  checkGymkhana(){
    this.isGymkhana = !this.isGymkhana
    this.isToggle = false
    this.isDeveloper = false
    this.isLogged = false
    this.isSelectAnything = !this.isSelectAnything
    this.onSelectAnything.emit(this.isSelectAnything)
  }
  checkDeveloper(){
    this.isDeveloper = !this.isDeveloper
    this.isGymkhana = false
    this.isToggle = false
    this.isLogged = false
    this.isSelectAnything = !this.isSelectAnything
    this.onSelectAnything.emit(this.isSelectAnything)
  }
}
