import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input () product:any;
  constructor() { }

  ngOnInit(): void {
  }
  onUpdate(ee:any):void{
    this.product.likes=ee.count;
  }
}

