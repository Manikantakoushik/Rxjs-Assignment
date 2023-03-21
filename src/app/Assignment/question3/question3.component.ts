import { Component, OnInit } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-question3',
  templateUrl: './question3.component.html',
  styleUrls: ['./question3.component.less']
})
export class Question3Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const clicks = fromEvent(document, 'click');
    const result = clicks.pipe(switchMap(() => interval(3000)));  
    result.subscribe(x => console.log(x));
  }

}
