import { Component, OnInit } from '@angular/core';
import { JokeService } from '../../utils/services/joke.service';

@Component({
  selector: 'app-joke',
  standalone: true,
  imports: [],
  templateUrl: './joke.component.html',
  styleUrl: './joke.component.css'
})
export class JokeComponent implements OnInit {
  joke : string = ""

  constructor(private chuckNorrisFactService : JokeService) {}


  ngOnInit(): void {
    this.chuckNorrisFactService.getJoke().subscribe( (data : string) => {
      this.joke = data;
    })
  }

  reload() {
    this.ngOnInit();
  }

}
