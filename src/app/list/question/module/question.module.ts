import { NgModule ,  CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularMaterialForm } from '../../../angular-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import {QuestionComponent} from '../component/question.component';
import { AuthGuard } from '../../.../../../auth/auth.guard';


const routes: Routes = [
  {path: '', component: QuestionComponent, canActivate: [AuthGuard]},
];
@NgModule({
  declarations: [
    QuestionComponent


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
