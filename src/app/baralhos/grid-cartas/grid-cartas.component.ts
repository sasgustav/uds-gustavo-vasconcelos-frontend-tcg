import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Carta } from 'src/app/models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-grid-cartas',
  templateUrl: './grid-cartas.component.html',
  styleUrls: ['./grid-cartas.component.scss']
})
export class GridCartasComponent implements OnInit {
  cartas!: Observable<Carta[]>;
  isLoading!: Observable<boolean>;

  constructor(private pokemonTcgService: PokemonTcgService) {}

  ngOnInit() {
    this.cartas = this.pokemonTcgService.getCartas();
    this.isLoading = this.pokemonTcgService.getLoadingStatus();
  }

  adicionarAoBaralho(carta: Carta) {
    let baralho = JSON.parse(localStorage.getItem('baralho') || '[]');
    if (baralho.some((c: Carta) => c.id === carta.id)) {
      alert('Carta já adicionada ao baralho!');
      return;
    }
    baralho.push(carta);
    localStorage.setItem('baralho', JSON.stringify(baralho));
    alert('Carta adicionada ao baralho!');
  }
}
