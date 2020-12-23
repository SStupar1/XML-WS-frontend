import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarModelService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllCarModels(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/car-models`);
  }

  public createCarModel(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/car-models`, body);
  }
}
