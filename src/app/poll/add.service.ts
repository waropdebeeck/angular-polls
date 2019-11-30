import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Poll } from '../models/poll.model';

@Injectable({
  providedIn: 'root'
})
export class AddService {

  constructor(private http: HttpClient) { }

  registerPoll(poll : Poll){
    const body: Poll = {
      naam: poll.naam
    }
    return this.http.post(window.location.protocol + '//' + window.location.hostname + ':44312/' + 'api/Poll', body);
  }
}
