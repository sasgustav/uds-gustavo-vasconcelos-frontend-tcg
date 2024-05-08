import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Carta } from 'src/app/models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-baralho',
  templateUrl: './criar-baralho.component.html',
  styleUrls: ['./criar-baralho.component.scss']
})
export class CriarBaralhoComponent {
  cartas: Observable<Carta[]>;
  deckName: string = '';
  cardsInDeck: Carta[] = [];
  cardCount: { [key: string]: number } = {};

  constructor(private pokemonTcgService: PokemonTcgService, private router: Router) {
    this.cartas = this.pokemonTcgService.getCartas(); // Assume que esta linha carrega as cartas para o grid
  }

  addCardToDeck(carta: Carta) {
    const count = this.cardCount[carta.name] || 0;
    if (count < 4) {
      this.cardsInDeck.push(carta);
      this.cardCount[carta.name] = count + 1;
    } else {
      alert('Não pode adicionar mais de 4 cartas com o mesmo nome.');
    }
  }

  removeCardFromDeck(carta: Carta) {
    const index = this.cardsInDeck.findIndex(c => c.id === carta.id);
    if (index !== -1) {
      this.cardsInDeck.splice(index, 1);
      this.cardCount[carta.name]--;
      if (this.cardCount[carta.name] === 0) {
        delete this.cardCount[carta.name]; // Remove completamente se não há mais cartas desse tipo
      }
      alert(`Carta ${carta.name} removida do baralho.`);
    }
  }

  canSaveDeck(): boolean {
    return this.cardsInDeck.length >= 24 && this.cardsInDeck.length <= 60;
  }

  saveDeck() {
    if (!this.deckName.trim()) {
      alert('Por favor, digite um nome para o baralho.');
      return;
    }
    if (this.canSaveDeck()) {
      localStorage.setItem(this.deckName, JSON.stringify({ cards: this.cardsInDeck, count: this.cardCount }));
      alert('Baralho salvo com sucesso!');
      this.resetDeck();
      this.router.navigate(['/lista-de-baralhos']); // Adapte para a sua rota correta
    } else {
      alert('O baralho deve ter entre 24 e 60 cartas.');
    }
  }

  resetDeck() {
    this.cardsInDeck = [];
    this.cardCount = {};
    this.deckName = ''; 
  }
}