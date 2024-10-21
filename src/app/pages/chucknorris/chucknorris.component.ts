import { Component, OnInit } from '@angular/core';
import { Fact } from '../../utils/types/fact.model';
import { ChuckNorrisFactService } from '../../utils/services/chuck-norris-fact';

@Component({
  selector: 'app-chucknorris',
  standalone: true,
  imports: [],
  templateUrl: './chucknorris.component.html',
  styleUrl: './chucknorris.component.css'
})
export class ChucknorrisComponent implements OnInit {
  fact : Fact = {
    categories : [],
    created_at : "",
    icon_url : "",
    id : "",
    updated_at : "",
    url: "",
    value: ""
  }

  constructor(private chuckNorrisFactService : ChuckNorrisFactService) {}


  ngOnInit(): void {
    this.chuckNorrisFactService.getJoke().subscribe( (data : Fact) => {
      this.fact = data;
    })
  }

  reload() {
    this.ngOnInit();
  }

}
