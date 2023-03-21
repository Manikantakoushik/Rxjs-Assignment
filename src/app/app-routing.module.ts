import { Component, NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AssignmentQuestion2Component } from "./assignment-question2/assignment-question2.component";
import { Question1Component } from "./Assignment/question1/question1.component";
import { Question10Component } from "./Assignment/question10/question10.component";
import { Question11Component } from "./Assignment/question11/question11.component";
import { Question2Component } from "./Assignment/question2/question2.component";
import { Question3Component } from "./Assignment/question3/question3.component";
import { Question4Component } from "./Assignment/question4/question4.component";
import { Question5Component } from "./Assignment/question5/question5.component";
import { Question6Component } from "./Assignment/question6/question6.component";
import { Question7Component } from "./Assignment/question7/question7.component";
import { Question8Component } from "./Assignment/question8/question8.component";
import { Question9Component } from "./Assignment/question9/question9.component";
import { OperatorComponent } from "./operator/operator.component";

const routes: Routes = [
  // {path:"",component:OperatorComponent},
  {
    path: "question-1",
    component: Question1Component,
  },{
    path:"question-2",component:Question2Component
  }, {
    path: "question-3",
    component: Question3Component,
  },{
    path:"question-4",component:Question4Component
  }, {
    path: "question-5",
    component: Question5Component,
  },{
    path:"question-6",component:Question6Component
  }, {
    path: "question-7",
    component: Question7Component,
  },{
    path:"question-8",component:Question8Component
  }, {
    path: "question-9",
    component: Question9Component,
  },{
    path:"question-10",component:Question10Component
  }, {
    path: "question-11",
    component: Question11Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
