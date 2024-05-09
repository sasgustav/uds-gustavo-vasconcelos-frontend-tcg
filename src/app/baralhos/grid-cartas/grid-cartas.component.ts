// grid-cartas.component.ts
import { Carta } from 'src/app/models/carta.model';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-grid-cartas',
  templateUrl: './grid-cartas.component.html',
  styleUrls: ['./grid-cartas.component.scss']
})
export class GridCartasComponent implements OnInit {
  cartas!: Observable<Carta[]>;
  isLoading!: Observable<boolean>;
  modalVisivel: boolean = false;
  cartaSelecionada?: Carta;

  constructor(private pokemonTcgService: PokemonTcgService) {}

  ngOnInit() {
    this.cartas = this.pokemonTcgService.getCartas();
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

  abrirModalDetalhes(carta: Carta) {
    this.cartaSelecionada = carta;
    this.modalVisivel = true;
  }

  fecharModal() {
    this.modalVisivel = false;
  }
}
