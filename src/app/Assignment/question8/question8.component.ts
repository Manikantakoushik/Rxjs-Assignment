import { Component, OnInit } from '@angular/core';
import { from} from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-question8',
  templateUrl: './question8.component.html',
  styleUrls: ['./question8.component.less']
})
export class Question8Component implements OnInit {

  constructor() { }

  ngOnInit() {
 
    let source1$=from([{name:"Raju",age:25},{name:"suresh",age:35}]);
    source1$.pipe(filter((val)=>{
        return val.age > 30;
      
    })).subscribe((data)=>{
      console.log(data);
    })
  

  }

}
