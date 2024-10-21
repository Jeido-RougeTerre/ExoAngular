import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fact } from '../types/fact.model';

@Injectable({
  providedIn: 'root'
})
export class ChuckNorrisFactService {

  private apiUrl = 'https://api.chucknorris.io/jokes/random'

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Fact> {
    return this.http.get<Fact>(this.apiUrl);
  }
}
