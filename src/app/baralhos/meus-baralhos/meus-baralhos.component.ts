import { Component, OnInit } from '@angular/core';

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

  carregarBaralhos() {
    this.baralhos = JSON.parse(localStorage.getItem('baralhoCriadoPeloUsuario') || '[]');
  }

  sumHP(cards: any[]): number {
    return cards.reduce((total, card) => total + Number(card.hp), 0);
  }

  editarBaralho(baralho: any) {
    console.log('Editando baralho:', baralho.nome);
  }

  removerBaralho(nomeDoBaralho: string) {
    if(confirm(`Tem certeza que deseja remover o baralho '${nomeDoBaralho}'?`)) {
      this.baralhos = this.baralhos.filter(baralho => baralho.nome !== nomeDoBaralho);
      localStorage.setItem('baralhoCriadoPeloUsuario', JSON.stringify(this.baralhos));
      alert('Baralho removido com sucesso.');
    }
  }

  verDetalhes(baralho: any) {
    console.log('Visualizando detalhes do baralho:', baralho.nome);
  }
}
