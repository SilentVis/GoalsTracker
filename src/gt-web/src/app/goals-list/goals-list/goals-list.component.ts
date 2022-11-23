import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gt-goals-list',
  templateUrl: './goals-list.component.html',
  styleUrls: ['./goals-list.component.scss']
})
export class GoalsListComponent implements OnInit {

  goals: Goal[] = [
  {title:'test1', description: '23423423423423', progress: 10},
  {title:'test2', description: '23423423423423', progress: 30},
  {title:'test3', description: '23423423423423', progress: 60},
  {title:'test1', description: '23423423423423', progress: 10},
  {title:'test2', description: '23423423423423', progress: 30},
  {title:'test3', description: '23423423423423', progress: 60},
  {title:'test1', description: '23423423423423', progress: 10},
  {title:'test2', description: '23423423423423', progress: 30},
  {title:'test3', description: '23423423423423', progress: 60}
  ];

  constructor() { }

  ngOnInit(): void {
  }



}


export interface Goal {

  title: string;
  description: string;
  progress: number;
}
