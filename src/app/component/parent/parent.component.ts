import { Component, OnInit, ViewChild ,AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  message:string = "This message is from parent"

  @ViewChild(ChildComponent) child: any;
  parentData?:string;
  ngAfterViewInit() {
    this.parentData = this.child.childSays
  }

  outputDecoratorMessage?:string;
  receiveMessage($event: any){
    this.outputDecoratorMessage=$event
  }

}
