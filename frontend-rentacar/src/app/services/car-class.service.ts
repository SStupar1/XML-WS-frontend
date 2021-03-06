import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarClassService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllCarClasses(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/car-classes`);
  }

  public createCarClass(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/car-classes`, body);
  }

  public getCarClass(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/car-classes/${id}`);
  }

  public updateCarClass(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}/ad-service/car-classes/${id}`, body);
  }

  public deleteCarClass(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/ad-service/car-classes/${id}`);
  }
}
