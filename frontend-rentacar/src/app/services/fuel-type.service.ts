import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuelTypeService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllFuelTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/fuel-types`);
  }

  public createFuelType(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/fuel-types`, body);
  }

  public getFuelType(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/fuel-types/${id}`);
  }

  public updateFuelType(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}/ad-service/fuel-types/${id}`, body);
  }

  public deleteFuelType(id): Observable<any>{
    return this.http.delete(`${this.baseUrl}/ad-service/fuel-types/${id}`);
  }

}
