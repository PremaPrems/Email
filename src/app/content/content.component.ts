import { Component, OnInit,Input } from '@angular/core';
import {DragDropDirectiveModule} from 'angular4-drag-drop'
import {ToolSectionComponent} from '../tool-section/tool-section.component'
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  constructor() { }
  public dropText:Array<any>

  ngOnInit() {
  }
  dropItem(dragItem){
    this.dropText.push(dragItem)

  }
}
