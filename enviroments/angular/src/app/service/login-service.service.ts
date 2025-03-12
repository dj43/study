import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {
  constructor(readonly httpClient: HttpClient) {}

  login() {
    let req = {
      email: 'john@mail.com',
      password: 'changeme',
    };
    return this.httpClient.post(
      'https://api.escuelajs.co/api/v1/auth/login',
      req
    );
  }
}
