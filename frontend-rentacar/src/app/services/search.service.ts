import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }


  public search(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('address', data["address"])
                               .set("fromDateString", data["fromDateString"])
                               .set("toDateString", data["toDateString"])
                               .set("fromTimeString", data["fromTimeString"])
                               .set("toTimeString", data["toTimeString"])
                               .set("carBrandId", data["carBrandId"])
                               .set("carModelId", data["carModelId"])
                               .set("carClassId", data["carClassId"])
                               .set("fuelTypeId", data["fuelTypeId"])
                               .set("gearshiftTypeId", data["gearshiftTypeId"])
                               .set("minPrice", data["minPrice"])
                               .set("maxPrice", data["maxPrice"])
                               .set("limitedKm", data["limitedKm"])
                               .set("kmTraveled", data["kmTraveled"])
                               .set("seats", data["seats"])
                               .set("availableCDW", data["availableCDW"])
    } 
    return this.http.get(`${this.baseUrl}/ad-service/ads/search`, queryParams);
  }
}
