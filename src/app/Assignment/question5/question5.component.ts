import { Component, OnInit } from '@angular/core';
import { forkJoin, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-question5',
  templateUrl: './question5.component.html',
  styleUrls: ['./question5.component.less']
})
export class Question5Component implements OnInit {

  constructor() { }

  ngOnInit() {
    // let promise= new Promise((resolve,reject)=>{
    //   resolve(9);
    // }).then((data)=>{
    //   // console.log("promise",data)
    // })
    // console.log(promise);
    let source1$=of('bar');
    let source2$=Promise.resolve(9);
    forkJoin([of('bar'),Promise.resolve(9)]).subscribe((data)=>{
      console.log(data);
    })



  }

}
