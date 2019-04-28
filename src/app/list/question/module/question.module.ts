import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialForm } from '../../../angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from '../component/create/question.component';
import { AuthGuard } from '../../.../../../auth/auth.guard';
import {ListquestionComponent} from '../component/listquestion/listquestion.component';


const routes: Routes = [
  {path: '', component: QuestionComponent, canActivate: [AuthGuard]},
  {path: 'list', component: ListquestionComponent, canActivate: [AuthGuard]}
];
@NgModule({
  declarations: [
    QuestionComponent,
    ListquestionComponent,


  ],
  exports:[
    QuestionComponent,
    ListquestionComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialForm,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)

  ]
})
export class QuestionModule { }
