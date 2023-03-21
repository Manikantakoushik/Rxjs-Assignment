import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { filter, reduce, takeUntil, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-question10',
  templateUrl: './question10.component.html',
  styleUrls: ['./question10.component.less']
})
export class Question10Component implements OnInit {

  constructor() { }

  ngOnInit() {

    let click$=fromEvent(document,'click').pipe(takeUntil(interval(3000)),toArray());
    click$.subscribe((data)=>{
      console.log(data)
      console.log("Number of values emited by the clickEvent:",data.length);
    })
   
  }

}
