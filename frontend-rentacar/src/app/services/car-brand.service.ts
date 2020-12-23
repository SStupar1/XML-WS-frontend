import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarBrandService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllCarBrands(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/car-brands`);
  }

  public createCarBrand(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/car-brands`, body);
  }

}
