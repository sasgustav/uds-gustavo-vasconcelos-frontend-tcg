import { Component, OnInit } from '@angular/core';
import { Observable, finalize } from 'rxjs';
import { PokemonTcgService } from 'src/app/services/pokemon-tcg.service';
import { Set } from 'src/app/models/set.model';

@Component({
  selector: 'app-buscar-conjuntos',
  templateUrl: './buscar-conjuntos.component.html',
  styleUrls: ['./buscar-conjuntos.component.scss']
})
export class BuscarConjuntosComponent implements OnInit {
  conjuntos!: Observable<Set[]>;
  loading: boolean = false;
  searchQuery!: string;

  constructor(private pokemonTcgService: PokemonTcgService) {}

  ngOnInit(): void {
    this.loadSets();
  }

  loadSets(): void {
    const value = this.searchQuery;
    if (value) {
      this.loading = true;
      this.conjuntos = this.pokemonTcgService.getSets(value).pipe(
        finalize(() => this.loading = false)
      );
    }
  }
}
