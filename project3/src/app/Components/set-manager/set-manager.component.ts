import { Component, OnInit } from '@angular/core';
import { flashcard } from 'src/app/Models/flashcard';
import { flashcardset } from 'src/app/Models/flashcard-set';


@Component({
  selector: 'app-set-manager',
  templateUrl: './set-manager.component.html',
  styleUrls: ['./set-manager.component.css']
})
export class SetManagerComponent implements OnInit {
  card: flashcard = new flashcard(1,'question','answer');
  cardset: flashcardset = new flashcardset(1,'category?','set1')
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
