import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Question} from '../model/question.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient, private router: Router) { }
  addQuestion(question: string, questionOption: Array<string>, answer: Array<string>) {
    const postData: Question = {id: null, question:question, questionOption:questionOption, answer:answer,  creator: null};
    console.log('serviceData', postData);
     this.http
       .post<{ message: string; }>(
         'http://localhost:3000/api/addquestion/',
         postData
       )
       .subscribe(responseData => {
         this.router.navigate(['/']);
       });
   }
}
