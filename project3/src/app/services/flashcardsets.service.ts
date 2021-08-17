import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashCardSet } from '../models/CardSet';
import { User } from '../models/CardSet';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsetsService {

  constructor(private http : HttpClient) { }


  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getAllCardSets() :Observable<FlashCardSet[]>{
    return this.http.get<FlashCardSet[]>('http://localhost:8080/cardsets');
  }

  getCardSetsByUserId(user: User) :Observable<FlashCardSet[]>{
    return this.http.get<FlashCardSet[]>('http://localhost:8080/cardsets/' + user.id );
  }

  addCardSet(cardset: FlashCardSet): Observable<FlashCardSet>{
    return this.http.post<FlashCardSet>('http://localhost:8080/cardsets', cardset, { headers: this.postHeaders });
  }

  updateCardSet(cardset: FlashCardSet): Observable<FlashCardSet>{
    return this.http.put<FlashCardSet>('http://localhost:8080/cardsets/' + cardset.id, cardset, { headers: this.postHeaders });
  }

  getCardSetByCategory(param: string): Observable<FlashCardSet[]> {
    return this.http.get<FlashCardSet[]>('http://localhost:8080/cardsets/search-category/?category=' + param, {responseType: "json"} );
  }

  getCardSetByName(name: string): Observable<FlashCardSet>{
    return this.http.get<FlashCardSet>('http://localhost:8080/cardsets/search-name?name=' + name);
  }
}