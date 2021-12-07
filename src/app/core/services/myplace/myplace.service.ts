import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class MyplaceService {
  apiUrl: string = "https://escroom.herokuapp.com/api/nodejs/";

  constructor(private http: HttpClient) {}

  loadUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}users`);
  }
}
