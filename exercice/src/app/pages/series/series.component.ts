import { Component } from '@angular/core';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {
  series: string[] = ["item1", "item2", "item3"];

  removeSerie(index : number) : boolean {
    if (this.series.length - 1 < index || index < 0) return false;
    this.series.splice(index, 1);
    return true;
  }
}
