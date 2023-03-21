import { Component, OnInit } from '@angular/core';
import { of, zip } from 'rxjs';
import { concatMap, map, mergeMap, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.less']
})
export class Question4Component implements OnInit {

  constructor() { }

  ngOnInit() {
    let name$=of('Foo','Bar');
    let age$=of(27,25);
    zip(age$,name$).pipe(map(([age,name])=>({age,name}))).subscribe((data)=>{
      console.log(data);
      
    })
  }

}
