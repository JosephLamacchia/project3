import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { flashcard } from '../Models/flashcard';

@Injectable({
  providedIn: 'root'
})
export class FlashcardsService {


  constructor(private http : HttpClient) { }

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getAllCards() :Observable<flashcard[]>{
    return this.http.get<flashcard[]>('http://localhost:8080/cards');
  }

  addCard(card: flashcard): Observable<flashcard>{
    return this.http.post<flashcard>('http://localhost:8080/cards', card, { headers: this.postHeaders });
  }

  updateCard(card: flashcard): Observable<flashcard>{
    return this.http.put<flashcard>('http://localhost:8080/cards/' + card.id, card, { headers: this.postHeaders });
  }

}