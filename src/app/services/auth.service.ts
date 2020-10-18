import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { CredenciaisDTO } from '../models/DTO/credenciais.dto';
import { LocalUser } from '../models/DTO/local_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public http: HttpClient, public storage: StorageService) {}

  authenticate(creds: CredenciaisDTO) {
    return this.http.post(
      `${API_CONFIG.baseUrl}/login`,
     creds, 
    {
      observe: 'response',
      responseType: 'text'
    });
  }

  successfulLogin(authorizationValue: string) {
    const tok = authorizationValue.substring(7);
    const user: LocalUser = {
      token: tok
      //cpf: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}
