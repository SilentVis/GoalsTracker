import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {

  value = 'Clear me';

  constructor() { }

  ngOnInit(): void {
  }

}
