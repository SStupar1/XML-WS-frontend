import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllAds(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/ads`);
  }

  public getAllPublisherAds(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/ads/publisher-ads/${id}`);
  }


  public getAd(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/ads/${id}`);
  }

  public updateAd(id, body): Observable<any> {
    return this.http.put(`${this.baseUrl}/ad-service/ads/${id}`, body);
  }

  public deleteAd(id): Observable<any> {
    return this.http.delete(`${this.baseUrl}/ad-service/ads/${id}`);
  }

  public createAd(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/ads`, body);
  }
}
