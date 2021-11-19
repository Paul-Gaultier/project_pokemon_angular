import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemons } from '../models/pokemons';

@Component({//carte d'identité du composant
  selector: 'app-home',//le composant homme -> je suis en rélation avc :
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pokemons = POKEMONS;

  // En .ts(type scrip) il faut toujours typer toutes ses variables
  //title: string = 'mon titre en javascript'
  constructor() { }

  ngOnInit(): void {// Lorsque la page sera affichée, tu m'excute ceci...
  }

}
