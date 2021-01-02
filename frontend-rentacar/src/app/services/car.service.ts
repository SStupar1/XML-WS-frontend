import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CarService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getCar(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/cars/${id}`);
  }

  public getAllCars(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/cars`);
  }

  public updateCar(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}/ad-service/cars/${id}`, body);
  }
}
