import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {ContentComponent} from '../content/content.component'
import { dragobject} from '../models/dragobject'
@Component({
  selector: 'app-tool-section',
  templateUrl: './tool-section.component.html',
  styleUrls: ['./tool-section.component.css']
})
export class ToolSectionComponent implements OnInit {
public item:dragobject=[]
dragItem:dragobject=[];
public id: number =0

@Output() dragText = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
dragObject(){

  
  	this.item={
			id:(this.id=this.id+1),
			content: 'Type your text here!'
    };   
}
startDragging(event){
  this.dragItem= this.item;
  this.dragText.emit(this.dragItem);
}

}
