import { Component, AfterViewInit, HostListener, OnInit, ElementRef } from '@angular/core';
import Swiper from 'swiper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit,OnInit  {
 
  swiper:Swiper
  slides = ["Graph","Timeline","Gallery"]
  isSelect:boolean = false
  constructor(el:ElementRef){}
  ngOnInit(){

    // preOffSet = 
  }
  
  @HostListener('window:scroll',[])
  onWindowScroll(){
    console.log(document.body.scrollTop+" : "+document.documentElement.scrollTop)
    if(document.body.scrollTop > 65 || document.documentElement.scrollTop > 65){
      // document.getElementById("header").style.display = "none";
      document.getElementById("stickbar").classList.add("sticky");
    }else{
      // document.getElementById("header").style.display = "block";
      document.getElementById("stickbar").classList.remove("sticky");
    } 
  }

  ngAfterViewInit(){
    
    var swiper = new Swiper('.swiper-container', {
      pagination:{
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          var tabsName = ['Status', 'Timeline', 'Gallery'];
          if ( index === (tabsName.length - 1) ) {
              return	"<span class=\"" + className + "\"><b>"
                  + tabsName[index] + '</b></span>'
                  + "<div class=\"active-mark \"></div>";
          }
          return '<span class="' + className + '"><b>' + tabsName[index] + '</b></span>';
          }
      }, 
      initialSlide: 1,
      slidesPerView: 1,
      loop: true,
        });
      }
     
      onSelect(isSelect):void{
        console.log(isSelect)
        this.isSelect = isSelect
      }

  }

