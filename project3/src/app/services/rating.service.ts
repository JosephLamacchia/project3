import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rating } from '../Models/rating';
import { flashcardset } from '../Models/flashcard-set';

@Injectable({
  providedIn: 'root'
})
export class RatingService {
  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http : HttpClient) { }


  addRating(rate: Rating) :Observable<Rating>{
    return this.http.post<Rating>('http://localhost:8080/rating',rate, { headers: this.postHeaders });
  }

  getAllRatingsForSet(set: flashcardset):Observable<Rating[]>{
    return this.http.post<Rating[]>('http://localhost:8080/rating',set, { headers: this.postHeaders });
  }

  
  

}
