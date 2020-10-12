import { Medicamento } from './../models/medicamento.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {
  constructor(public http: HttpClient) {}
  medicamentosBuscarTodos(): Observable<Medicamento[]> {
    return this.http.get<Medicamento[]>(`${API_CONFIG.baseUrl}/medicamentos`);
  }
}
