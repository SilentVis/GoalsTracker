import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppToolbarComponent } from './app-toolbar/app-toolbar.component';
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppToolbarComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    FlexLayoutModule
  ],
  exports:[
    AppToolbarComponent
  ]
})
export class ToolbarModule { }
