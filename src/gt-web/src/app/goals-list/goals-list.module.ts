import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddGoalComponent } from './add-goal/add-goal.component';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatIconModule} from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

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

    FlexLayoutModule,

    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatDividerModule
  ]
})
export class GoalsListModule { }
