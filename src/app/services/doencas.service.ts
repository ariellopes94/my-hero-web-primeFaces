import { Doenca } from './../models/doenca.model';

import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoencasService {
  constructor(public http: HttpClient) {}

  doencasBuscarTodos(): Observable<Doenca[]> {
    return this.http.get<Doenca[]>(`${API_CONFIG.baseUrl}/doencas`);
  }
}
