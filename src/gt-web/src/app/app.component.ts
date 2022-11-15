import { Component } from '@angular/core';
import { StyleManager } from './services/style-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Goals tracker';
  isDark = this.styleManager.isDark;

  constructor(private styleManager: StyleManager) {}

  toggleDarkTheme() {
    this.styleManager.toggleDarkTheme();
    this.isDark = !this.isDark;
  }
}
