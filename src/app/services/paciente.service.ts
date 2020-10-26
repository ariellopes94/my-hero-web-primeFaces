import { StorageService } from './storage.service';
import { Paciente } from './../models/paciente';
import { CartaoQrCode } from '../models/DTO/cartaoQrCode.dto';
import { FichaPacienteDTO } from '../models/DTO/fichaPaciente.dto';
import { Injectable } from '@angular/core';

import { API_CONFIG } from '../config/api.config';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PacienteProfileDTO } from '../models/DTO/paciente_profile.dto';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  create(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(
      `${API_CONFIG.baseUrl}/pacientes`,
      paciente
    );
  }

  fichaDoPaciente(numeroFichaPacienteUrl: string): Observable<FichaPacienteDTO> {
    //const numeroFichaPaciente: string = window.location.href;
    return this.http.get<FichaPacienteDTO>(
      `${API_CONFIG.baseUrl}/pacientes/fichaDoPaciente/${numeroFichaPacienteUrl}`
    );
    //XTR700
  }

  gerarQrCode(cpf: string): Observable<CartaoQrCode> {
    return this.http.get<CartaoQrCode>(
      `${API_CONFIG.baseUrl}/pacientes/gerarCodigoQrCode/${cpf}`
    );
  }

  findByCpf(cpf: string): Observable<PacienteProfileDTO> {

    return this.http.get<PacienteProfileDTO>(
      `${API_CONFIG.baseUrl}/pacientes/cpf?value=${cpf}`);
}
}
