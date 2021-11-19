import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { POKEMONS } from '../bdd/pokedex';
import { Pokemons } from '../models/pokemons';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  pokemons = POKEMONS;
  pokemon : Pokemons = new Pokemons();
  constructor(private route: ActivatedRoute) { }
  //Ici on va définir la variable route en privée et indiquer qu'elle de type Router
  //Router est objet de la bibliothèque ANGULAR
  ngOnInit(): void {

    this.pokemons = POKEMONS; //Je confirme la valeur 


    let id = this.route.snapshot.params['id'];//Cette variable va être égale à ce qui se trouve dans l'URL ici ['id']
    for(let i = 0; i < this.pokemons.length; i++){

      if(this.pokemons[i].id == id)
      {
        this.pokemon = this.pokemons[i];
      }
    }
    console.log(id);
  }
  
  //snapshot -> Permet d'aller chercher le params(paramètre) ['id']

  

}
