import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = environment.baseUrl;
  constructor(private http: HttpClient) { }

  public login(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/auth-service/auth/login`, body);
  }

  public registerSimpleUser(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth-service/auth/register-simple-user`, body);
  }

  public registerAgent(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth-service/auth/register-agent`, body);
  }

  public getToken(){
    return JSON.parse(localStorage.getItem('token'));
  }
}


