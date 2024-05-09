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
  cartaSelecionada?: Carta;
  modalVisivel: boolean = false;

  constructor(private pokemonTcgService: PokemonTcgService) {}

  ngOnInit() {
    this.cartas = this.pokemonTcgService.getCartas();
  }

  abrirModalDetalhes(carta: Carta) {
    console.log("Opening modal for card:", carta);
    this.cartaSelecionada = carta;
    this.modalVisivel = true;
  }
  
  fecharModal() {
    console.log("Closing modal");
    this.modalVisivel = false;
    this.cartaSelecionada = undefined;
  }  
}
