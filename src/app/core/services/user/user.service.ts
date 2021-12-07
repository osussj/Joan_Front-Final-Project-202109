import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserService {
  apiUrl: string = "https://escroom.herokuapp.com/api/user";

  getToken() {
    const userLogged = localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user") || "")
      : "";

    if (userLogged) {
      return userLogged.token;
    }
    return null;
  }

  constructor(private http: HttpClient) {}

  signin(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password });
  }

  loadUserProfile(): Observable<any> {
    const token = this.getToken();
    return this.http.get(`${this.apiUrl}/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
