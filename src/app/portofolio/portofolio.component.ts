import { Component, OnInit } from '@angular/core';


interface ImgDetails{
  src:string ;
  title:string;
  caption:string;
}


@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {}


  imgs:ImgDetails[]=[
    {src :'../../assets/imgs/12.png',title:'LOG CABIN',caption:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {src :'../../assets/imgs/13.png',title:'TASTY CAKE',caption:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {src :'../../assets/imgs/14.png',title:'CIRCUS TENT',caption:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {src :'../../assets/imgs/15.png',title:'CONTROLLER',caption:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {src :'../../assets/imgs/16.png',title:'LOCKED SAFE',caption:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'},
    {src :'../../assets/imgs/17.png',title:'SUBMARINE',caption:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.'}
  ]




  imgSrc:any="" ;
  imgTitle:string = "";
  imgCaption:string = "";

  openModal(e:any){
    let modal = $('#modal');
    // $(document.body).css('overflow','hidden');
    // modal.css('display','block');
    modal.fadeIn(()=>{});
    $(document.body).css('overflow','hidden');
    //  this.imgSrc = $(e.target).prev().attr('src')
    this.imgSrc = $(e.target).parentsUntil('.col-md-4').find('img').attr('src');
    // console.log(this.imgSrc)
     for (let img of this.imgs) {
       if(img.src == this.imgSrc){
         console.log(img)
        this.imgTitle = img.title;
        this.imgCaption = img.caption;
       }
     }

   }

  closeModal(){
    // $('#modal').css('display','none')
    $('#modal').fadeOut();
    $(document.body).css('overflow','auto')

  }

  clickOut(e:Event){
    let x = document.getElementById('modal')
    let y = e.target
    if(x == y ){
    this.closeModal()
    }
  }



}


