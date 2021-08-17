import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlashCard } from '../models/Card';

@Injectable({
  providedIn: 'root'
})
export class HttpCardsService {

  constructor(private http : HttpClient) { }

  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  getAllCards() :Observable<FlashCard[]>{
    return this.http.get<FlashCard[]>('http://localhost:8080/cards');
  }

  addCard(card: FlashCard): Observable<FlashCard>{
    return this.http.post<FlashCard>('http://localhost:8080/cards', card, { headers: this.postHeaders });
  }

  updateCard(card: FlashCard): Observable<FlashCard>{
    return this.http.put<FlashCard>('http://localhost:8080/cards/' + card.id, card, { headers: this.postHeaders });
  }

}
