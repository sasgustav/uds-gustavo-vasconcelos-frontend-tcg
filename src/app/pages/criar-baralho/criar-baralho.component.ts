import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Carta } from 'src/app/models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-baralho',
  templateUrl: './criar-baralho.component.html',
  styleUrls: ['./criar-baralho.component.scss']
})
export class CriarBaralhoComponent implements OnInit {
  cartas: Carta[] = [];
  carregandoBaralho: boolean = false;
  nomeDoBaralho: string = '';
  cartasNoBaralho: Carta[] = [];
  contadorDeCartas: { [nome: string]: number } = {};

  constructor(private servicoPokemonTcg: PokemonTcgService, private roteador: Router) {}

  ngOnInit() {
    this.carregarBaralho();
  }

  carregarBaralho() {
    this.carregandoBaralho = true;
    this.servicoPokemonTcg.getCartas().pipe(
      finalize(() => this.carregandoBaralho = false)
    ).subscribe(cartas => {
      this.cartas = cartas;
    });
  }

  adicionarCartaAoBaralho(carta: Carta) {
    const contagem = this.contadorDeCartas[carta.name] || 0;
    if (contagem < 4) {
      this.cartasNoBaralho.push(carta);
      this.contadorDeCartas[carta.name] = contagem + 1;
    } else {
      alert('Não pode adicionar mais de 4 cartas com o mesmo nome.');
    }
  }

  removerCartaDoBaralho(carta: Carta) {
    const indice = this.cartasNoBaralho.findIndex(c => c.id === carta.id);
    if (indice !== -1) {
      this.cartasNoBaralho.splice(indice, 1);
      this.contadorDeCartas[carta.name]--;
      if (this.contadorDeCartas[carta.name] === 0) {
        delete this.contadorDeCartas[carta.name];
      }
      alert(`Carta ${carta.name} removida do baralho.`);
    }
  }

  podeSalvarBaralho(): boolean {
    return this.cartasNoBaralho.length >= 24 && this.cartasNoBaralho.length <= 60;
  }

  salvarBaralho() {
    if (!this.nomeDoBaralho.trim()) {
      alert('Por favor, digite um nome para o baralho.');
      return;
    }
    if (this.podeSalvarBaralho()) {
      const baralhos = JSON.parse(localStorage.getItem('baralhoCriadoPeloUsuario') || '{}');
      if (baralhos[this.nomeDoBaralho]) {
        alert('Um baralho com esse nome já existe. Por favor, escolha um nome diferente.');
        return;
      }

      baralhos[this.nomeDoBaralho] = {
        cards: this.cartasNoBaralho,
        count: this.contadorDeCartas
      };

      localStorage.setItem('baralhoCriadoPeloUsuario', JSON.stringify(baralhos));
      alert('Baralho salvo com sucesso!');
      this.resetarBaralho();
      this.roteador.navigate(['/ver-baralhos-criados']);
    } else {
      alert('O baralho deve ter entre 24 e 60 cartas.');
    }
  }

  resetarBaralho() {
    this.cartasNoBaralho = [];
    this.contadorDeCartas = {};
    this.nomeDoBaralho = '';
  }
}
