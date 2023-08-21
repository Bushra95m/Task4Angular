import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDroplistComponent } from './user-droplist/user-droplist.component';
import { QuestionComponent } from './question/question.component';


const routes: Routes = [
 
  {path:'',component:UserDroplistComponent},
  {path:'question',component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
