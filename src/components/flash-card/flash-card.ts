import { Component, Input } from '@angular/core';


@Component({
  selector: 'flash-card',
  templateUrl: 'flash-card.html'
})
export class FlashCardComponent {

  text: string;
  @Input('flipped') flipped: boolean = false;
  
  constructor() {
    console.log('Hello FlashCardComponent Component');
    this.text = 'Hello World';
  }

  // flipped: boolean = false;
 
 
  flip(){
    this.flipped = !this.flipped;
  }

}
