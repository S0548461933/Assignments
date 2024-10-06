
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentFormComponent } from './assignment-form/assignment-form.component';
import { AssignmentListComponent } from './assignment-list/assignment-list.component';

const routes: Routes = [
  { path: 'assignments', component: AssignmentListComponent },
  { path: '', component: AssignmentListComponent },
  { path: 'create-assignment', component: AssignmentFormComponent },
  // { path: '', redirectTo: '/assignments', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
