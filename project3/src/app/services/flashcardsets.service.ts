import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flashcardset } from '../Models/flashcard-set';
import { user } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsetsService {

  constructor(private http : HttpClient) { }


  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getAllCardSets() :Observable<flashcardset[]>{
    return this.http.get<flashcardset[]>('http://localhost:8080/cardsets');
  }

  getCardSetsByUserId(user: user) :Observable<flashcardset[]>{
    return this.http.get<flashcardset[]>('http://localhost:8080/cardsets/' + user.user_id );
  }

  addCardSet(cardset: flashcardset): Observable<flashcardset>{
    return this.http.post<flashcardset>('http://localhost:8080/cardsets', cardset, { headers: this.postHeaders });
  }

  updateCardSet(cardset: flashcardset): Observable<flashcardset>{
    return this.http.put<flashcardset>('http://localhost:8080/cardsets/' + cardset.setid, cardset, { headers: this.postHeaders });
  }

  getCardSetByCategory(param: string): Observable<flashcardset[]> {
    return this.http.get<flashcardset[]>('http://localhost:8080/cardsets/search-category/?category=' + param, {responseType: "json"} );
  }

  getCardSetByName(name: string): Observable<flashcardset>{
    return this.http.get<flashcardset>('http://localhost:8080/cardsets/search-name?name=' + name);
  }
}