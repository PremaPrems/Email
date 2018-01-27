import { Component } from '@angular/core';
import {dragitemvalue} from './models/dragitemvalue';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public value:dragitemvalue

  droppedItem(type){
    this.value=type;
  }
}
