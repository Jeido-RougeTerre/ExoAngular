import { Component } from '@angular/core';
import { Pokemon } from './pokemon';
import { FormArray, FormControl, FormGroup,  ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  pokemons : Pokemon[] = [];

  types : string[] = [
    "NORMAL",
    "FIRE",
    "FIGHTING",
    "WATER",
    "FLYING",
    "GRASS",
    "POISON",
    "ELECTRIC",
    "GROUND",
    "PSYCHIC",
    "ROCK",
    "ICE",
    "BUG",
    "DRAGON",
    "GHOST",
    "DARK",
    "STEEL",
    "FAIRY"
  ]

  pokemon_form: FormGroup = new FormGroup(
    {
      nom: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      desc: new FormControl('', [Validators.required]),
      types: new FormControl([]),
      attacks : new FormArray([
        new FormGroup({
          nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
          desc: new FormControl(''),
          dmg: new FormControl(0, [Validators.min(0)])
        }, [Validators.required])
      ]),
      zone : new FormGroup({
        nom: new FormControl('', [Validators.required]),
        region: new FormControl("Johto", [Validators.required])
      })
    }, [Validators.required]);

    get attacks() {
      return this.pokemon_form.controls['attacks'] as FormArray;
    }

    addAttack() {
      if (this.canAddAttack()) {
        this.attacks.push(new FormGroup({
          nom: new FormControl('', [Validators.required, Validators.minLength(3)]),
          desc: new FormControl(''),
          dmg: new FormControl(0, [Validators.min(0)])
        }));
      } else {
        console.error("Too much attacks cannnot have more than " + Pokemon.maxAttack);
      }
    }

    canAddAttack() : boolean {
      return this.attacks.length < Pokemon.maxAttack;
    }

    submitPokemon() {
      if (this.pokemon_form.valid){
        console.log(this.pokemon_form.value)
        this.pokemon_form.reset();
      }
    }
}
