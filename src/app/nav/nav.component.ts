import { Component, HostListener, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }



  @HostListener('window:scroll',['$event'])
  onWindowScroll($event: any){
    let scroll:any = $event.target.scrollingElement.scrollTop;

    let nav = $('nav') ;
    let aboutY:any = $('#about').offset()?.top;
    let contactY:any = $('#contact').offset()?.top;
    let portoflioY:any = $('#portofolio').offset()?.top;
    if(scroll>0){
      nav.removeClass('nav-scrolling')
      if(scroll >= portoflioY && scroll < aboutY-100){
        $('#contact-link').removeClass('active');
        $('#about-link').removeClass('active');
        $('#portofolio-link').addClass('active');       }
      else if(scroll >= aboutY-100 && scroll < contactY-100){
        $('#contact-link').removeClass('active');
        $('#about-link').addClass('active');
        $('#portofolio-link').removeClass('active');      }
      else if(scroll >= contactY-100 ){
        $('#contact-link').addClass('active');
        $('#about-link').removeClass('active');
        $('#portofolio-link').removeClass('active');
      }
    }
    else{
      nav.addClass('nav-scrolling')
      $('#portofolio-link').removeClass('active');
    }





  }

}


