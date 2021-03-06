import { Injectable } from '@angular/core';

import { StorageService } from './storage.service';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { CredenciaisDTO } from '../models/DTO/credenciais.dto';
import { LocalUser } from '../models/DTO/local_user';
//import { JwtHelper } from 'angular2-jwt';
import { JwtHelperService } from "@auth0/angular-jwt";
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  jwtHelper = new JwtHelperService();
  
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
      token: tok,
      cpf: this.jwtHelper.decodeToken(tok).sub
    };
    this.storage.setLocalUser(user);
  }

  logout() {
    this.storage.setLocalUser(null);
  }
}
