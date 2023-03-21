import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, map, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-question11',
  templateUrl: './question11.component.html',
  styleUrls: ['./question11.component.less']
})
export class Question11Component implements OnInit {

  constructor() { }

  ngOnInit() {

    let source1$=from([1,4,3,14,5,6,7,8,9,10]);
   
    
    source1$.pipe(filter((x)=> x%2==0),map((x)=> x*2),toArray(),map((z)=> z.sort((a,b)=> a-b ))).subscribe((data)=>{
      console.log(data);
      
    })


  }

}
