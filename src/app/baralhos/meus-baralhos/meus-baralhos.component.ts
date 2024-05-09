import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/models/carta.model';

@Component({
  selector: 'app-meus-baralhos',
  templateUrl: './meus-baralhos.component.html',
  styleUrls: ['./meus-baralhos.component.scss']
})
export class MeusBaralhosComponent implements OnInit {
  baralhos: any[] = [];

  ngOnInit() {
    this.carregarBaralhos();
  }

  contarTipos(cards: Carta[], tipo: string): number {
    return cards.filter(card => card.supertype === tipo).length;
  }

  contarTiposUnicos(cards: Carta[]): number {
    const uniqueTypes = new Set(cards.flatMap(card => card.types));
    return uniqueTypes.size;
  }

  listarTiposUnicos(cards: Carta[]): string[] {
    return Array.from(new Set(cards.flatMap(card => card.types)));
  }

  carregarBaralhos() {
    const dados = localStorage.getItem('baralhoCriadoPeloUsuario');
    if (dados) {
      const objetosBaralhos = JSON.parse(dados);
      this.baralhos = Object.keys(objetosBaralhos).map(key => ({
        nome: key,
        ...objetosBaralhos[key]
      }));
    } else {
      console.log('Nenhum dado encontrado no localStorage.');
    }
  }

  sumHP(cards: any[]): number {
    return cards.reduce((total, card) => total + Number(card.hp), 0);
  }

  editarBaralho(baralho: any) {
    console.log('Editando baralho:', baralho.nome);
  }

  removerBaralho(nomeDoBaralho: string) {
    if (confirm(`Tem certeza que deseja remover o baralho '${nomeDoBaralho}'?`)) {
      this.baralhos = this.baralhos.filter(baralho => baralho.nome !== nomeDoBaralho);
      localStorage.setItem('baralhoCriadoPeloUsuario', JSON.stringify(this.baralhos.reduce((acc, curr) => {
        acc[curr.nome] = { cards: curr.cards };
        return acc;
      }, {})));
      alert('Baralho removido com sucesso.');
    }
  }

  verDetalhes(baralho: any) {
    console.log('Visualizando detalhes do baralho:', baralho.nome);
  }
}
