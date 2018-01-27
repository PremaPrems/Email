import { Component, Input, OnInit, OnChanges } from '@angular/core';
import {contentPage} from '../models/dragObject'
import {dragitemvalue}from '../models/dragitemvalue'

@Component({
  selector: 'app-content-page',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css']
})

export class ContentPageComponent implements OnChanges{
@Input() typeName:dragitemvalue;
element: HTMLElement = null;
content:contentPage={elements:[{}]}

constructor() {
}

ngOnChanges(){
    this.addElemToContentPage()
}

addElemToContentPage() {
  if(this.typeName.type=="text"){
  this.content.elements.push(this.generateElem(this.typeName.type,this.typeName.id));
  }
}

generateElem(type,ID) {
	return {
		id:ID,
    type: 'text',
    edit:{
      fontStyle:'monospace',
        fontColor:'blue',
        fontSize:13,
        content:'Type your text here',
        width:80,
        height:40,
        backgroundColor:'gray'
    }
	}
}

getText(textboxid){
  for (let element of this.content.elements){
    if(element.id == textboxid)
    {
      console.log("equal")
    }
  }
}

resize(val){
  this.element=document.getElementById(val)
  this.element.style.height=this.element.scrollHeight +'px';
}
}
