import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';
import { Joke } from '../types/joke.model';
import { JokeType } from '../types/joke.type';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,racist,sexist,explicit'

  constructor(private http: HttpClient) { }

  getJoke(): Observable<Joke> {
    return this.http.get<Joke>(this.apiUrl).pipe(
      map(resp => {
        let joke : Joke = {
          type: resp.type,
          joke: resp.joke,
          setup: resp.setup,
          delivery: resp.delivery
        }

        return joke;
      }),
      catchError(error => {
        alert(error.message);
        return of();
      })
    );
  }
}
