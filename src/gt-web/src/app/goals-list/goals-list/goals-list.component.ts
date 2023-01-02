import { Component, OnInit } from '@angular/core';
import { DefaultLayoutAlignDirective } from '@angular/flex-layout';

@Component({
  selector: 'gt-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {

  goals: Goal[]

  constructor() {
    this.goals = [];

    let newGoal =  {title: 'test'} as Goal;
    this.goals.push(newGoal)
    this.goals.push(newGoal)
    this.goals.push(newGoal)
    this.goals.push(newGoal)
    this.goals.push(newGoal)
    this.goals.push(newGoal)
    this.goals.push(newGoal)
    this.goals.push(newGoal)
    this.goals.push(newGoal)

   }

  ngOnInit(): void {
  }

  addGoal(data:string){
    let newGoal =  {title: data} as Goal;
    this.goals.push(newGoal)
  }
}

export interface Goal{
  title: string;
}
