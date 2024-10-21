import { Routes } from '@angular/router';
import { CounterComponent } from './pages/counter/counter.component';
import { SeriesComponent } from './pages/series/series.component';
import { LibraryComponent } from './pages/library/library.component';
import { PokemonComponent } from './pages/pokemon/pokemon.component';
import { ChucknorrisComponent } from './pages/chucknorris/chucknorris.component';


export const routes: Routes = [
    {path: 'series', component: SeriesComponent},
    {path: 'counter', component: CounterComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'pokemon', component: PokemonComponent},
    {path: 'chuck', component: ChucknorrisComponent}
];
