import { Component, OnInit,Input} from '@angular/core';
import {dragobject} from '../models/dragobject';
@Component({
  selector: 'app-generic-box',
  templateUrl: './generic-box.component.html',
  styleUrls: ['./generic-box.component.css']
})
export class GenericBoxComponent implements OnInit {
@Input()
	private genericBox:object
  constructor() { }

  ngOnInit() {
  	if (!this.genericBox){
  		this.genericBox = {name:'svsv', content:'error'}
  	}
  }
}
