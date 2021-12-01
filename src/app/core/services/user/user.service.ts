import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  apiUrl: string =
    "https://proyecto-final-joan-back.herokuapp.com/api/user/login";

  constructor(private http: HttpClient) {}

  signin(username: string, password: string): Observable<any> {
    return this.http.post(this.apiUrl, { username, password });
  }
}
