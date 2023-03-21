import { Component, OnInit } from '@angular/core';
import { from, interval, of } from 'rxjs';
import { take, mergeMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-question2',
  templateUrl: './question2.component.html',
  styleUrls: ['./question2.component.less']
})
export class Question2Component implements OnInit {

  constructor() { }

  ngOnInit() {
    let source1$=of('a','b','c');
    source1$.pipe(mergeMap(x => interval(1000).pipe(take(5),map((i)=>{
    
     return x+i;
    })))).subscribe((data)=>{
      console.log(data);
    })
  }


}
