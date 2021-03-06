import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgentService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAgent(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/auth-service/agents/${id}`);
  }

  public updateAgent(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}/auth-service/agents/${id}`, body);
  }
}
