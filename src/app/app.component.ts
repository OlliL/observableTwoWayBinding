import {Component} from '@angular/core';
import {Model} from "./model";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  model: Model[] = [
      new Model('test1'),
      new Model('test2')
    ];


}
