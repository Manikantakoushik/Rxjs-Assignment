import { Component, OnInit } from '@angular/core';
import { forkJoin, of, zip } from 'rxjs';

@Component({
  selector: 'app-question6',
  templateUrl: './question6.component.html',
  styleUrls: ['./question6.component.less']
})
export class Question6Component implements OnInit {

  constructor() { }

  ngOnInit() {

    let source1$=of(1,2,3,4,5);
    let source2$=of('a','b','c','d','e');
    let source3$=of(11,12,13,14);

    // in this case observable 3 is emiting 4 values and remaining all observable are emiting 5 values so the last emited values by the other observables are discarded in zip
    zip(source1$,source2$,source3$).subscribe((data)=>{
      console.log("Zip :",data);
    })
    // Fork Join will combine all the observerble of last emited value and makes an array..
    forkJoin(source1$,source2$,source3$).subscribe((data)=>{
      console.log("Fork Join:" ,data);
    })

  }

}
