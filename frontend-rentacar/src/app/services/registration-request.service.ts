import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationRequestService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public confirmRegistrationRequest(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/auth-service/simple-users/confirm`, body);
  }

  
}
