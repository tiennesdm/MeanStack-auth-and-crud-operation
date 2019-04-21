import { Component, OnInit } from '@angular/core';
import { NgForm, ValidationErrors, Validator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';
import {QuestionService} from '../services/question.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
   optionA = '';
   optionB = '';
   optionC = '';
   optionD = '';
   answerA: false;
   answerB: false;
   answerC: false;
   answerD: false;
   questionArray = [];
   message = '';
   answerArray = [];
   isLoading = false;
   private authStatusSub: Subscription;
  constructor(
    public route: ActivatedRoute,
    private authService: AuthService,
    private questionService:QuestionService,
  ) { }

  ngOnInit() {
    this.authStatusSub = this.authService
    .getAuthStatusListener()
    .subscribe(authStatus => {
      this.isLoading = false;
    });
    this.isLoading = true;
    setTimeout((

    )=> { this.isLoading = false;},3000);
  }

  onAddQuestion(f: NgForm) {
    if (f.invalid) {
      return null;
    }

    console.log('form value', f.value);
    if(f.value.answerA === true){
      this.answerArray.push(this.optionA);


    } else if (f.value.answerB === true){
      this.answerArray.push(this.optionB);


    } else  if(f.value.answerC === true){
      this.answerArray.push(this.optionC);


    } else if(f.value.answerD === true){
      this.answerArray.push(this.optionD);
    }
    if (this.answerArray.length == 0) {

      this.message= 'Please select the answer';
      console.log( 'this lenth',this.answerArray.length);
      console.log('Please a answer for that question');
      this.questionArray = [];
    }
    else{
      this.isLoading = true;
      this.questionArray.push(f.value.optionA, f.value.optionB, f.value.optionC, f.value.optionD);
      this.questionService.addQuestion(f.value.question, this.questionArray, this.answerArray);
      console.log(this.questionArray);
      this.message = '' ;
      this.answerArray = [];
      this.questionArray = [];
      f.reset();

      f.resetForm();
      setTimeout((

        )=> { this.isLoading = false;},3000);
    }
    }

}
