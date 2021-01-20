import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  public createComment(body): Observable<any> {
    return this.http.post(`${this.baseUrl}/ad-service/comments`, body);
  }

  public getAllCommentsByStatus(data) : Observable<any>{
    let queryParams = {
      params : new HttpParams().set('status', data["status"])
    } 
    return this.http.get(`${this.baseUrl}/ad-service/comments/status`, queryParams);
  }

  
  public approveComment(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/ad-service/comments/approve`, body);
  }

  
  public denyComment(body): Observable<any> {
    return this.http.put(`${this.baseUrl}/ad-service/comments/deny`, body);
  }
}
