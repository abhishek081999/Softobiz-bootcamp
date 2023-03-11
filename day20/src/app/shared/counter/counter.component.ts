import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
 

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input() count:number=0;      // Property
  @Output() update=new EventEmitter; //Event



  constructor() { }

  ngOnInit(): void {
  
  }

  onIncrement():void{
    this.count++;
    this.update.emit({count:this.count});
  }

  onDecrement():void{
    if(this.count !=0){
      this.count--;
      this.update.emit({count:this.count});
    }
    else{
      this.count=0;
    }
  }

}
