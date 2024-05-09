import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Carta } from 'src/app/models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-lista-cartas',
  templateUrl: './lista-cartas.component.html',
  styleUrls: ['./lista-cartas.component.scss']
})
export class ListaCartasComponent implements OnInit {
  cartas: Carta[] = [];
  isLoading: boolean = false; // Inicialmente falso
  selectedCard?: Carta;
  showModal: boolean = false;

  constructor(private pokemonTcgService: PokemonTcgService) {}

  ngOnInit() {
    this.carregarCartas();
  }

  carregarCartas() {
    this.isLoading = true;
    this.pokemonTcgService.getCartas()
      .pipe(finalize(() => this.isLoading = false)) // Garante que isLoading é atualizado quando o carregamento termina
      .subscribe(cartas => {
        this.cartas = cartas;
      });
  }

  abrirModalDetalhes(carta: Carta) {
    this.selectedCard = carta;
    this.showModal = true;
  }

  adicionarAoBaralho(carta: Carta, event: MouseEvent) {
    event.stopPropagation(); // Interrompe a propagação para evitar abrir o modal
    let baralho: Carta[] = JSON.parse(localStorage.getItem('baralho') || '[]');
    baralho.push(carta);
    localStorage.setItem('baralho', JSON.stringify(baralho));
  }

  closeModal() {
    this.showModal = false;
    this.selectedCard = undefined;
  }
}
