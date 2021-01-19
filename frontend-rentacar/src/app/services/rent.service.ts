import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RentService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  
  public createReservation(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/rent-service/reservations`, body);
  }

  public createBundle(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/rent-service/bundles`, body);
  }
}
