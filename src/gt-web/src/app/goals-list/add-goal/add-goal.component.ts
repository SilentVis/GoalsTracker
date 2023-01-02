import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'gt-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {

  @Output() submitGoal = new EventEmitter<string>();

  value = '';

  constructor() { }

  ngOnInit(): void {
  }

  addGoal(){
    this.submitGoal.emit(this.value);
    this.value = '';
  }

}
