import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../utils/services/joke.service';
import { Joke } from '../../utils/types/joke.model';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit {
  joke : Joke = {
    type: "single"
  }

  showDeliver : boolean = false;

  constructor(private jokeService : JokeService) {}


  ngOnInit(): void {
    this.showDeliver = false;
    this.jokeService.getJoke().subscribe( (data : Joke) => {
      this.joke = data;
    })
  }

  reload() {
    this.ngOnInit();
  }

  toMultiLines(str : string) : string[] {
    return str.split('\n');
  }

  showDelivery() {
    this.showDeliver = true;
  }

}
