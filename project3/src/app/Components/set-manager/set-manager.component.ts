import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-manager',
  templateUrl: './set-manager.component.html',
  styleUrls: ['./set-manager.component.css']
})
export class SetManagerComponent implements OnInit {
 setName = '';
 selected:any;
 data:Array<Object> = [
  {id: 0, name: "name1"},
  {id: 1, name: "name2"}
];


  constructor() { }

  ngOnInit(): void {
  }

  
showSelected(){

  //this will poulate table based on the set name
  console.log(this.selected);
}

}
