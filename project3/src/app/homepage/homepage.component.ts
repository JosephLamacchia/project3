import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data:Array<any> = [
    {id: 0,creator_id:1, title: "name1"},
    {id: 0,creator_id:1, title: "name2"},
    {id: 0,creator_id:1, title: "name3"},
    {id: 0,creator_id:1, title: "name4"},

  ];
  constructor() { }

  ngOnInit(): void {
  }}
