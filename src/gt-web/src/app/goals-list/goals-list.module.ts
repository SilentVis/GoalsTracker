import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { GoalsListComponent } from './goals-list/goals-list.component';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

const routes: Routes = [
  {
    path: '',
    component : GoalsListComponent
  }
]

@NgModule({
  declarations: [
    GoalsListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule
  ]
})
export class GoalsListModule { }
