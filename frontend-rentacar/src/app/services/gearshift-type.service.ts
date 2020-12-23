import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GearshiftTypeService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  public getAllGearshiftTypes(): Observable<any> {
    return this.http.get(`${this.baseUrl}/ad-service/gearshift-types`);
  }

  public createGearshiftType(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/gearshift-types`, body);
  }

}
