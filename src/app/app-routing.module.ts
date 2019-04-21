import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthGuard } from './auth/auth.guard';
import { PostlistComponent } from './list/postlist/postlist.component';
import { FetchlistComponent } from './list/fetchlist/fetchlist.component';
import {QuestionComponent} from './list/question/question.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {path: '', component: QuestionComponent, canActivate: [AuthGuard]},
 // { path: 'edit/:postId', component: PostlistComponent, canActivate: [AuthGuard] },
 // { path: 'create', component: PostlistComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
