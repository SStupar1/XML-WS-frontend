import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RatingService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public rateAd(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/ratings`, body);
  }

  public getAllRatingsByAd(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/ratings/${id}/ad`);
  }

  public getAverageRatingByAd(id): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/ratings/average/${id}/ad`);
  }

}
