import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap';
import {dragitemvalue} from '../models/dragitemvalue';

@Component({
  selector: 'app-tools-page',
  templateUrl: './tools-page.component.html',
  styleUrls: ['./tools-page.component.css']
})
export class ToolsPageComponent implements OnInit {
@Output() dragText = new EventEmitter<any>();
dragItem:dragitemvalue=[];
public type:string
public id: number =0
constructor() { }

ngOnInit() {
}
startDragging(event){
  this.dragItem={
    id:(this.id=this.id+1),
	  type: 'text'
  };  
this.dragText.emit(this.dragItem);
}

}
