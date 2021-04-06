import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childMessage?: string;

  @Output() messageEmitter=new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  childSays:string="Here we passed the data from child for getting it in parent purpose"

  message:string="This is the message emitted by the child to get by the parent"
  

  sendMessage(){
    this.messageEmitter.emit(this.message);
  }

}
