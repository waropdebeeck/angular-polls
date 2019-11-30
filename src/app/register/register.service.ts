import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  registerUser(user : User){
    const body: User = {
      gebruikersnaam: user.gebruikersnaam,
      wachtwoord: user.wachtwoord,
      email: user.email
    }
    return this.http.post(window.location.protocol + '//' + window.location.hostname + ':44312/' + 'api/Gebruiker', body);
  }
}
