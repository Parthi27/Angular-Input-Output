import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-child",
  templateUrl: "./child.component.html",
  styleUrls: ["./child.component.css"]
})
export class ChildComponent implements OnInit {
  constructor() {}
  @Input() name: any;
  @Input() data: any
  @Output() notify = new EventEmitter();
  ngOnInit() {
    console.log(this.data);
  }
  childnotify(){
    this.notify.emit(true);

  }
  tableEdit(a,b){
    console.log(a);
    console.log(b);
  }

 
}
