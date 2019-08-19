import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTaskComponent } from './features/add-task/add-task.component';
import { TimesheetComponent } from './widgets/timesheet/timesheet.component';
import { TimesheetPageComponent } from './features/timesheet-page/timesheet-page.component';

const routes: Routes = [
  { path: '', component: TimesheetComponent},
  { path: 'add-task', component: AddTaskComponent},
  { path: 'timesheet-dummy', component: TimesheetPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
