import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContentComponent } from '../app/content/content.component';
import { TopSectionComponent } from '../app/top-section/top-section.component';
import { ToolSectionComponent } from './tool-section/tool-section.component';
import { GenericBoxComponent } from './generic-box/generic-box.component'
import {DragDropDirectiveModule} from 'angular4-drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    TopSectionComponent,
    ToolSectionComponent,
    GenericBoxComponent
  ],
  imports: [
    BrowserModule,
    DragDropDirectiveModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
