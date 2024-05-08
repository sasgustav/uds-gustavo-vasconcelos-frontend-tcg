import { Carta } from './../../core/models/carta';
import { Component, OnInit } from '@angular/core';
import { PokemonTcgService } from 'src/app/core/services/pokemon-tcg.service';

@Component({
  selector: 'app-lista-cartas',
  templateUrl: './lista-cartas.component.html',
  styleUrls: ['./lista-cartas.component.scss']
})
export class ListaCartasComponent implements OnInit {
  cartas: Carta[] = [];

  constructor(private pokemonTcgService: PokemonTcgService) {}

  ngOnInit() {
    this.pokemonTcgService.getCartas().subscribe(cartas => {
      this.cartas = cartas;
    });
  }

  adicionarAoBaralho(carta: Carta) {
    let baralho: Carta[] = JSON.parse(localStorage.getItem('baralho') || '[]');
    baralho.push(carta);
    localStorage.setItem('baralho', JSON.stringify(baralho));
  }
}
