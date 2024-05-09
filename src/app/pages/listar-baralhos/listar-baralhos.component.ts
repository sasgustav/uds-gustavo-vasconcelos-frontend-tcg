import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';

@Component({
  selector: 'app-listar-baralhos',
  templateUrl: './listar-baralhos.component.html',
  styleUrls: ['./listar-baralhos.component.scss']
})
export class ListarBaralhosComponent implements OnInit {
  isLoading: boolean = true;

  constructor(private pokemonTcgService: PokemonTcgService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.pokemonTcgService.getCartas()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(data => {
        // Processa os dados recebidos
      },
        error => {
          console.error('Erro ao carregar as cartas:', error);
          // Opcionalmente, mostre uma mensagem de erro para o usuário
        });
  }

}
