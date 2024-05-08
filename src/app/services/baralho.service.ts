import { Injectable } from '@angular/core';
import { Carta } from 'src/app/models/carta.model';

@Injectable({
  providedIn: 'root'
})
export class BaralhoService {
  private baralhos: { [key: string]: Carta[] } = {};

  constructor() {}

  adicionarCartaAoBaralho(nomeBaralho: string, carta: Carta) {
    if (!this.baralhos[nomeBaralho]) {
      this.baralhos[nomeBaralho] = [];
    }

    const baralhoAtual = this.baralhos[nomeBaralho];
    if (baralhoAtual.length >= 60) {
      alert('O baralho atingiu o limite de 60 cartas.');
      return;
    }

    const quantidadeCartas = baralhoAtual.filter(c => c.name === carta.name).length;
    if (quantidadeCartas >= 4) {
      alert('Não é possível adicionar mais de 4 cartas com o mesmo nome ao baralho.');
      return;
    }

    this.baralhos[nomeBaralho].push(carta);
    alert('Carta adicionada ao baralho com sucesso!');
  }

  getBaralhos(): { [key: string]: Carta[] } {
    return this.baralhos;
  }
}