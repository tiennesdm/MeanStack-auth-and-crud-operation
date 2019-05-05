import { Component, OnInit } from '@angular/core';
import { NgForm, ValidationErrors, Validator } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import {QuestionService} from '../../services/question.service';
import {Question} from '../../model/question.model';
import {
  MatSnackBar,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';

@Component({
  selector: 'app-listquestion',
  templateUrl: './listquestion.component.html',
  styleUrls: ['./listquestion.component.css']
})
export class ListquestionComponent implements OnInit {
  isLoading = false;
  dataSource = new MatTableDataSource<Question>();

  question:Question[] = [];

  displayedColumns: string[] = ['Question', 'Option A', 'Option B', 'Option C', 'Option D', 'Answer'];
 // dataSource = ELEMENT_DATA;
  constructor( private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions().subscribe(result=>
      {//console.log(data);
        this.isLoading  = true;
      // let data2 = data.i
      this.dataSource.data = result;
      this.isLoading = false;
    //  console.log(dataSource);
      console.log(this.dataSource.data);
    //  this.dataSource = data;
console.log(this.dataSource);
      }
      );

  }

}
