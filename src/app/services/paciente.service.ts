import { Paciente } from './../models/paciente';
import { CartaoQrCode } from '../models/DTO/cartaoQrCode.dto';
import { FichaPacienteDTO } from '../models/DTO/fichaPaciente.dto';
import { Injectable } from '@angular/core';

import { API_CONFIG } from '../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  constructor(public http: HttpClient) {}

  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(
      `${API_CONFIG.baseUrl}/pacientes`,
      paciente
    );
  }

  fichaDoPaciente(): Observable<FichaPacienteDTO> {
    const numeroFichaPaciente: string = window.location.href;

    alert('TESTE' + numeroFichaPaciente);
    return this.http.get<FichaPacienteDTO>(
      `${API_CONFIG.baseUrl}/pacientes/fichaDoPaciente/a5f2c031XXMy-HERO-434eXXMy-HERO-4a97XXMy-HERO-a932XXMy-HERO-05b9efe81056`
    );
    //XTR700
  }

  gerarQrCode(): Observable<CartaoQrCode> {
    return this.http.get<CartaoQrCode>(
      `${API_CONFIG.baseUrl}/pacientes/gerarCodigoQrCode/41894941004`
    );
  }
}
