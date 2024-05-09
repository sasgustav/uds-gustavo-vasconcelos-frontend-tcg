import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs';
import { Carta } from 'src/app/models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-grid-cartas',
  templateUrl: './grid-cartas.component.html',
  styleUrls: ['./grid-cartas.component.scss']
})
export class GridCartasComponent implements OnInit {
  cartas: Carta[] = [];
  isLoading: boolean = false;
  cartaSelecionada?: Carta;
  modalVisivel: boolean = false;

  constructor(private pokemonTcgService: PokemonTcgService) { }

  ngOnInit() {
    this.carregarCartas();
  }

  carregarCartas() {
    this.isLoading = true;
    this.pokemonTcgService.getCartas()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(cartas => {
        this.cartas = cartas;
      });
  }

  abrirModalDetalhes(carta: Carta) {
    this.cartaSelecionada = carta;
    this.modalVisivel = true;
  }

  fecharModal() {
    this.modalVisivel = false;
    this.cartaSelecionada = undefined;
  }
}
