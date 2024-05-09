import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Carta } from '../models/carta.model';
import { Set } from '../models/set.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {
  private baseApiUrl = environment.apiUrl;
  private loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getLoadingStatus(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getSets(query: string): Observable<Set[]> {
    const url = `${this.baseApiUrl}/sets?q=${query}`;
    console.log("Chamando API em:", url);
    return this.http.get<{ data: Set[] }>(url).pipe(
      map(response => response.data)
    );
  }

  getCartas(): Observable<Carta[]> {
    this.loading.next(true);
    const url = `${this.baseApiUrl}/cards`;
    return this.http.get<{ data: Carta[] }>(url).pipe(
      map(response => response.data),
      finalize(() => this.loading.next(false))
    );
  }
}
