import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-question1',
  templateUrl: './question1.component.html',
  styleUrls: ['./question1.component.less']
})
export class Question1Component implements OnInit {

  constructor() { }

  ngOnInit() {
    const numbers = [1, 2, 3, 4, 5, 6];
    console.log("Array of numbers:",numbers);
    from(numbers)
      .pipe(
        filter((num) => num % 2 === 0),
        map((num) => num * 2)
      )
      .subscribe((num) => console.log(num));
  }

}
