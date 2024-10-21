import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JokeService {

  private apiUrl = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,political,racist,sexist,explicit&type=single'

  constructor(private http: HttpClient) { }

  getJoke(): Observable<string> {
    return this.http.get<{joke: string}>(this.apiUrl).pipe(
      map(response => response.joke),
      catchError(error => {
        alert(error.message);
        return of('');
      })
    );
  }
}
