import { STORAGE_KEYS } from './../config/storage_keys.config';
import { LocalUser } from '../models/DTO/local_user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  getLocalUser(): LocalUser {
    const usr = localStorage.getItem(STORAGE_KEYS.localUser);
    if (usr == null) {
      return null;
    } else {
      return JSON.parse(usr);
    }
  }

  setLocalUser(obj: LocalUser) {
    if (obj == null) {
      localStorage.removeItem(STORAGE_KEYS.localUser);
    } else {
      localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(obj));
    }
  }
}
