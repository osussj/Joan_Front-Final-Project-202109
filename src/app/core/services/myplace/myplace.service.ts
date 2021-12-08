import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IUser } from "../../models/user";

@Injectable({
  providedIn: "root",
})
export class MyplaceService {
  apiUrl: string = "https://escroom.herokuapp.com/api/nodejs/";

  constructor(private http: HttpClient) {}

  loadUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}users`);
  }

  loginUserNode(data: IUser): Observable<any> {
    return this.http.post(`${this.apiUrl}login`, data);
  }

  loadLatestUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}users/latest`);
  }
}
