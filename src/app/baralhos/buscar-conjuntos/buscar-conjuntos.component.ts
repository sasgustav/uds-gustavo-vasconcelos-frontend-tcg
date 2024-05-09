import { Set } from './../../models/carta.model';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-buscar-conjuntos',
  styleUrls: ['./buscar-conjuntos.component.scss'],
  templateUrl: './buscar-conjuntos.component.html'
})
export class BuscarConjuntosComponent {
  conjuntos!: Observable<Set[]>;
  searchQuery: string = '';
  currentPage: number = 1;

  constructor(private pokemonTcgService: PokemonTcgService) {
    this.loadSets();
  }

  loadSets(query: string = '', page: number = 1, pageSize: number = 24): void {
    this.conjuntos = this.pokemonTcgService.getSets(query, page, pageSize);
  }

  nextPage(): void {
    this.currentPage++;
    this.loadSets(this.searchQuery, this.currentPage);
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.loadSets(this.searchQuery, this.currentPage);
    }
  }

  applyFilter(): void {
    this.loadSets(this.searchQuery);
  }

  clearFilter(): void {
    this.searchQuery = '';
    this.loadSets();
  }
}
