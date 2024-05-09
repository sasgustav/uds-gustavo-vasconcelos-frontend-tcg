import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-lista-cartas',
  templateUrl: './lista-cartas.component.html',
  styleUrls: ['./lista-cartas.component.scss']
})
export class ListaCartasComponent implements OnInit {
  cartas: Carta[] = [];
  isLoading: boolean = true;
  selectedCard?: Carta;
  showModal: boolean = false;

  constructor(private pokemonTcgService: PokemonTcgService) {}

  ngOnInit() {
    this.pokemonTcgService.getCartas().subscribe(cartas => {
      this.cartas = cartas;
      this.isLoading = false;
    });
  }

  abrirModalDetalhes(carta: Carta) {
    this.selectedCard = carta;
    this.showModal = true;
  }

  adicionarAoBaralho(carta: Carta) {
    let baralho: Carta[] = JSON.parse(localStorage.getItem('baralho') || '[]');
    baralho.push(carta);
    localStorage.setItem('baralho', JSON.stringify(baralho));
    event?.stopPropagation();
  }

  closeModal() {
    this.showModal = false;
  }
}
