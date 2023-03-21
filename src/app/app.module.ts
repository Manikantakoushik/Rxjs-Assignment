import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OperatorComponent } from './operator/operator.component';
import { AssignmentQuestion2Component } from './assignment-question2/assignment-question2.component';
import { Question1Component } from './Assignment/question1/question1.component';
import { Question2Component } from './Assignment/question2/question2.component';
import { Question3Component } from './Assignment/question3/question3.component';
import { Question4Component } from './Assignment/question4/question4.component';
import { Question5Component } from './Assignment/question5/question5.component';
import { Question6Component } from './Assignment/question6/question6.component';
import { Question7Component } from './Assignment/question7/question7.component';
import { Question8Component } from './Assignment/question8/question8.component';
import { Question9Component } from './Assignment/question9/question9.component';
import { Question10Component } from './Assignment/question10/question10.component';
import { Question11Component } from './Assignment/question11/question11.component';

@NgModule({
  declarations: [
    AppComponent,
    OperatorComponent,
    AssignmentQuestion2Component,
    Question1Component,
    Question2Component,
    Question3Component,
    Question4Component,
    Question5Component,
    Question6Component,
    Question7Component,
    Question8Component,
    Question9Component,
    Question10Component,
    Question11Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
