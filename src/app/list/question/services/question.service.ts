import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Question} from '../model/question.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';

const BACKEND_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class QuestionService {


  constructor(private http: HttpClient, private router: Router) { }
  addQuestion(question: string, option: Array<string>, answer: Array<string>, email: string) {
    const postData: Question = {id: null, question:question, option:option, answer: answer,  creator: null, email: email};
    console.log('serviceData', postData);
     this.http
       .post<{ message: string; }>(
        BACKEND_URL + '/addquestion/',
         postData
       )
       .subscribe(responseData => {
         alert(responseData.message);
         this.router.navigate(['/']);
       });
   }
getQuestions(): Observable<Question[]> {
  return this.http.get<Question[]>(BACKEND_URL + '/addquestion/getQuestion');
}
}
