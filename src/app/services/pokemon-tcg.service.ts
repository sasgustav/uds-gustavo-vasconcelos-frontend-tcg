import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, finalize, startWith } from 'rxjs/operators';
import { Carta } from '../models/carta.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonTcgService {
  private apiUrl = environment.apiUrl;
  private loading = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  getLoadingStatus(): Observable<boolean> {
    return this.loading.asObservable();
  }

  getCartas(): Observable<Carta[]> {
    this.loading.next(true);
    return this.http.get<{data: Carta[]}>(this.apiUrl).pipe(
      map(response => response.data),
      finalize(() => this.loading.next(false))
    );
  }
}
