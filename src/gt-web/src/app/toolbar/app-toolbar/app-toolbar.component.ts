import { Component, OnInit } from '@angular/core';
import { StyleManager } from 'src/app/services/style-manager.service';

@Component({
  selector: 'gt-app-toolbar',
  templateUrl: './app-toolbar.component.html',
  styleUrls: ['./app-toolbar.component.scss']
})
export class AppToolbarComponent implements OnInit {

  isDark = this.styleManager.isDark;

  constructor(private styleManager: StyleManager) {}

  ngOnInit(): void {
  }

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }

}
