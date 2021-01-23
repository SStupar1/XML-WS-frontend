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

  public generateReport(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('reservationId', data["reservationId"])
                               .set("kmTraveled", data["kmTraveled"])
    } 
    return this.http.get(`${this.baseUrl}/rent-service/reservations/generate-report`, queryParams);
  }

  public getAllPublisherReservations(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('publisherId', data["publisherId"])
                               .set("simpleUser", data["simpleUser"])
    } 
    return this.http.get(`${this.baseUrl}/rent-service/reservations/publisher`, queryParams);
  }

  public getAllApprovedPublisherReservations(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('publisherId', data["publisherId"])
                               .set("simpleUser", data["simpleUser"])
    } 
    return this.http.get(`${this.baseUrl}/rent-service/reservations/publisher/approved`, queryParams);
  }

  public getAllCustomerReservations(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('customerId', data["customerId"])
                               .set("simpleUser", data["simpleUser"])
    } 
    return this.http.get(`${this.baseUrl}/rent-service/reservations/customer`, queryParams);
  }

  public approveReservation(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/rent-service/reservations/approve`, body);
  }

  public denyReservation(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/rent-service/reservations/deny`, body);
  }

  public approveBundle(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/rent-service/bundles/approve`, body);
  }

  public denyBundle(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/rent-service/bundles/deny`, body);
  }

  public getAllPublisherBundles(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('publisherId', data["publisherId"])
                               .set("simpleUser", data["simpleUser"])
    } 
    return this.http.get(`${this.baseUrl}/rent-service/bundles/publisher`, queryParams);
  }

  

  
}
