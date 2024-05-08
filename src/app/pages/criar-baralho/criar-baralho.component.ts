import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Carta } from 'src/app/models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-baralho',
  templateUrl: './criar-baralho.component.html',
  styleUrls: ['./criar-baralho.component.scss']
})
export class CriarBaralhoComponent implements OnInit {
  cartas: Observable<Carta[]>;
  isLoadingDeck: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  deckName: string = '';
  cardsInDeck: Carta[] = [];
  cardCount: { [key: string]: number } = {};

  constructor(private pokemonTcgService: PokemonTcgService, private router: Router) {
    this.cartas = this.pokemonTcgService.getCartas();
  }

  ngOnInit() {
    this.loadDeck();
  }

  loadDeck() {
    this.isLoadingDeck.next(true);
    // Simulando o carregamento do baralho
    setTimeout(() => {
      this.isLoadingDeck.next(false);
      // Aqui você carregaria as cartas do baralho de algum serviço ou local storage
    }, 2000); // Simulação de delay de carregamento
  }

  addCardToDeck(carta: Carta) {
    console.log("Adicionando carta", carta.name);
    const count = this.cardCount[carta.name] || 0;
    if (count < 4) {
      this.cardsInDeck.push(carta);
      this.cardCount[carta.name] = count + 1;
      console.log(`Carta adicionada. Total agora: ${this.cardCount[carta.name]} de ${carta.name}`);
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
        delete this.cardCount[carta.name];
      }
      alert(`Carta ${carta.name} removida do baralho.`);
    }
  }

  canSaveDeck(): boolean {
    console.log(`Verificando possibilidade de salvar: ${this.cardsInDeck.length} cartas`);
    return this.cardsInDeck.length >= 24 && this.cardsInDeck.length <= 60;
  }

  saveDeck() {
    console.log("Tentando salvar o baralho com o nome:", this.deckName);
    if (!this.deckName.trim()) {
      alert('Por favor, digite um nome para o baralho.');
      return;
    }
    if (this.canSaveDeck()) {
      const baralhos = JSON.parse(localStorage.getItem('baralhoCriadoPeloUsuario') || '{}');
      if (baralhos[this.deckName]) {
        alert('Um baralho com esse nome já existe. Por favor, escolha um nome diferente.');
        return;
      }

      baralhos[this.deckName] = {
        cards: this.cardsInDeck,
        count: this.cardCount
      };

      localStorage.setItem('baralhoCriadoPeloUsuario', JSON.stringify(baralhos));
      alert('Baralho salvo com sucesso!');

      console.log("Baralho salvo e resetando dados.");
      this.resetDeck();
      this.router.navigate(['/ver-baralhos-criados']);
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