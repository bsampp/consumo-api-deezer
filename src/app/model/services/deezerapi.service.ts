import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeezerapiService {
  private baseUrl = 'https://deezerdevs-deezer.p.rapidapi.com/';
  private headers = new HttpHeaders({
    'X-RapidAPI-Key': '5d25b66589mshe3197540428108dp12d013jsn313b754a773b',
    'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com'
  });

  constructor(private http: HttpClient) {}

  // Método para buscar todas as faixas
  getAllTracks(name: string): Observable<any> {
    const options = {
      headers: this.headers,
      params: new HttpParams().set('q', name) // Adicione os parâmetros da consulta aqui
    };

    return this.http.get(`${this.baseUrl}search`, options);
  }

  // Método para obter os detalhes de uma faixa por ID
  getTrackDetails(trackId: string): Observable<any> {
    const options = {
      headers: this.headers
    };

    return this.http.get(`${this.baseUrl}track/${trackId}`, options);
  }
}
