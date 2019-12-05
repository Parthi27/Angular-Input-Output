import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

data:any;
name: any;
 
ngOnInit(){
  this.data = [{
    'Name':"Parthi",
     'Age': 20},

{
   'Name':"Parthi",
     'Age': 20

  },{
   'Name':"Parthi",
     'Age': 20

  },{
   'Name':"Parthi",
     'Age': 20

  },{
    'Name':"Parthi",
     'Age': 20

  },{
    'Name':"Parthi",
     'Age': 20

  },{
    'Name':"Parthi",
     'Age': 20

  },{
    'Name':"Parthi",
     'Age': 20

  },{
   'Name':"Parthi",
     'Age': 20

  },{
    'Name':"Parthi",
     'Age': 20

  },{
    'Name':"Parthi",
     'Age': 20

  },{
  'Name':"Parthi",
     'Age': 20

  },{
    'Name':"Parthi",
     'Age': 20
  },
]
}

 notify() {
 alert("bdf");
  }
}


