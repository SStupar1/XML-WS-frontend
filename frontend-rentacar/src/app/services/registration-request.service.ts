import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestService {

  private baseUrl = environment.baseUrl;
  private header: any;

  constructor(private http: HttpClient) { }

  /*public getTransferIp() {
    const token = localStorage.getItem("token");
  
    this.header = new HttpHeaders().set(
      "Auth-Token",
      `Bearer ${token}`
    );
  }*/

  public confirmRegistrationRequest(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/auth-service/simple-users/confirm`, body);
  }

  public getAllPendingUsers(): Observable<any> {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.token);
    return this.http.get(`${this.baseUrl}/auth-service/simple-users/registration-requests`, {
      headers: new HttpHeaders ({
        'Auth-Token' : `Bearer ${user.token}`
      })}
    );
  }
  /*
  public getAllPendingUsers(): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth-service/simple-users/registration-requests`);
  }
  */
}
