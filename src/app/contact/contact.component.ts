import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  checkValue(e: any) {
    let input = $(e.target);
    let value = input.val();
    let text = input.prev().children();
    if (value != '') {
      text.animate({ top: '0' }, 100);
    } else {
      text.animate({ top: '30px' }, 100);
    }
  }

  checkEmail(e: any) {
    this.checkValue(e);
    let value: any = $(e.target).val();
    let validation = /[a-z|A-Z|0-9](@)[a-z|A-Z|0-9]+(.com)$/;
    console.log(validation.test(value))
    let text = $(e.target).next().children();
    text.animate({ top: '0' }, 100);
    if (value != '') {
      if (!validation.test(value)) {
        text.animate({ top: '0' }, 50);
      } else {
        text.animate({ top: '30px' }, 50);
      }
    }else{
      text.animate({ top: '30px' }, 50);
    }
  }
}
