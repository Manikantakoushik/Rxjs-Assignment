import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-question7',
  templateUrl: './question7.component.html',
  styleUrls: ['./question7.component.less']
})
export class Question7Component implements OnInit {

  constructor() { }

  ngOnInit() {

   let source1$= fromEvent(document,'click');
   source1$.pipe(switchMap((x)=>interval(1000))).subscribe((data)=>{
    console.log(data)
   })

   
  }

}
