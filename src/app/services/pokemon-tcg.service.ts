import { Carta } from '../models/carta.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
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

  getSets(query: string = '', page: number = 1, pageSize: number = 250): Observable<Set[]> {
    let params = new HttpParams();
    if (query) {
      params = params.append('q', query);
    }
    params = params.append('page', page.toString());
    params = params.append('pageSize', pageSize.toString());

    const url = `${this.baseApiUrl}/sets`;
    return this.http.get<{ data: Set[] }>(url, { params }).pipe(
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