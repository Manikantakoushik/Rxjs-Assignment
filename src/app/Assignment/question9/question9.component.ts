import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { fromEvent } from 'rxjs/internal/observable/fromEvent';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-question9',
  templateUrl: './question9.component.html',
  styleUrls: ['./question9.component.less']
})
export class Question9Component implements OnInit {

  constructor() { }

  ngOnInit() {
    let source1$=fromEvent(document,'click');
    let source2$=interval(1000)
    source2$.pipe(takeUntil(source1$)).subscribe((data)=>{
      console.log(data);
      
    })

  }

}
