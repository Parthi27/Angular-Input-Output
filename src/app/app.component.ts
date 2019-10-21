import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
name: any;
  save(a){
  this.name = a;
  console.log(this.name);
}
 onNotify(k) {
   window.alert(k);
    window.alert("You will be notified when the product goes on sale");
  }
}


