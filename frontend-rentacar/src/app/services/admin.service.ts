import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAdmin(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth-service/admins/${id}`);
  }
  
  public updateAdmin(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}/auth-service/admins/${id}`, body);
  }
}
