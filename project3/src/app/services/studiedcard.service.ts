import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StudiedCard } from '../Models/studiedcard';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { user } from '../Models/user';

@Injectable({
  providedIn: 'root'
})
export class StudiedcardService {
  private postHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http : HttpClient) { }

  addStudiedCard(card: StudiedCard) :Observable<StudiedCard>{
    return this.http.post<StudiedCard>('http://localhost:8080/rating',card, { headers: this.postHeaders });
  }

  getStudiedCardsByUser(user_id: number):Observable<StudiedCard[]>{
    return this.http.get<StudiedCard[]>('http://localhost:8080/studied');

  }

  deleteStudiedCard(card: StudiedCard):Observable<StudiedCard>{
    return this.http.delete<StudiedCard>('http://localhost:8080/studied');

  }

}
