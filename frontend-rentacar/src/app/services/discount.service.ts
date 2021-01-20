import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getDiscount(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/rent-service/discounts/${id}`);
  }

  public getAllDiscounts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/rent-service/discounts`);
  }
}
