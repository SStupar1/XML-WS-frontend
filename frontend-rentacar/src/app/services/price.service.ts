import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PriceService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public calculateStartingPricePerAd(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('priceCDW', data["priceCDW"])
                               .set("availableCDW", data["availableCDW"])
                               .set("pricePerDay", data["pricePerDay"])
                               .set("discount", data["discount"])
                               .set("fromDateString", data["fromDateString"])
                               .set("toDateString", data["toDateString"])
    } 
    return this.http.get(`${this.baseUrl}/rent-service/price/starting-price`, queryParams);
  }

}
