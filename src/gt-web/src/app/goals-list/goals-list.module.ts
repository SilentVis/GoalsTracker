import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

const routes : Routes = [
  {
    path:'',
    component: GoalsListComponent
  }
]


@NgModule({
  declarations: [
    AddGoalComponent,
    GoalsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,

    MatCardModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class GoalsListModule { }
