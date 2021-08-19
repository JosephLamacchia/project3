import { Component, OnInit } from '@angular/core';
import { Rating } from 'src/app/Models/rating';
import { RatingService } from 'src/app/services/rating.service';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit {
  constructor(private http: RatingService) { }


  rating:Rating = new Rating(1,1,1,1);

  userRating:number = 0;
  class:string = 'fa fa-star checked';
  class2:string = 'fa fa-star checked';
  class3:string = 'fa fa-star checked';
  class4:string = 'fa fa-star checked';
  class5:string = 'fa fa-star checked';

  oneStar(){
    this.class = 'fa fa-star checked';
    this.class2= 'fa fa-star unchecked';
    this.class3= 'fa fa-star unchecked';
    this.class4= 'fa fa-star unchecked';
    this.class5 = 'fa fa-star unchecked';
    this.userRating = 1;
  }

  twoStars(){
    this.class = 'fa fa-star checked';
    this.class2= 'fa fa-star checked';
    this.class3= 'fa fa-star unchecked';
    this.class4= 'fa fa-star unchecked';
    this.class5 = 'fa fa-star unchecked';
    this.userRating = 2;

  }
  threeStars(){
    this.class = 'fa fa-star checked';
    this.class2= 'fa fa-star checked';
    this.class3= 'fa fa-star checked';
    this.class4= 'fa fa-star unchecked';
    this.class5 = 'fa fa-star unchecked';
    this.userRating = 3;

  }
  fourStars(){
    this.class = 'fa fa-star checked';
    this.class2= 'fa fa-star checked';
    this.class3= 'fa fa-star checked';
    this.class4= 'fa fa-star checked';
    this.class5 = 'fa fa-star unchecked';
    this.userRating = 4;

  }
  fiveStars(){
    this.class = 'fa fa-star checked';
    this.class2= 'fa fa-star checked';
    this.class3= 'fa fa-star checked';
    this.class4= 'fa fa-star checked';
    this.class5 = 'fa fa-star checked';
    this.userRating = 5;

  }
  
 

  ngOnInit(): void {
  }

  submitRating(){
  this.rating.stars = this.userRating;
  let dat:Date = new Date();
  this.rating.rated_on = dat.getTime();

// this.rating.deck_id = ????

//this.rating.user_id = ????

this.http.addRating(this.rating).subscribe(
  (Response)=>{
    console.log("Response from rating submition : " + JSON.stringify(Response))
  }
)

  
  }

}
