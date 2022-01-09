import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = "http://localhost:8000/api/users";

@Injectable({
  providedIn: 'root'
})
export class DSwatcherService {

  constructor(private http: HttpClient) { }

  getAll(params: any): Observable<any> {
    return this.http.get(baseUrl, { params });
  }

  get(id: any): Observable<any> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByUserName(userName: any): Observable<any> {
    return this.http.get(`${baseUrl}?userName=${userName}`);
  }

  filter(queryParams:any):Observable<any>{
    const opts = { params: new HttpParams(queryParams)};
    return this.http.get(`${baseUrl}/filter`, opts);
  }
}
