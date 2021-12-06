import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IQuestion } from "../../models/question";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  apiUrl: string = "https://escroom.herokuapp.com/api/room/node";

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

  loadRoom(): Observable<any> {
    const token = this.getToken();
    return this.http.get(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  loadQuestions(): Observable<any> {
    const token = this.getToken();
    return this.http.get(`${this.apiUrl}/question`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  postQuestion(data: IQuestion): Observable<any> {
    const token = this.getToken();
    return this.http.post(`${this.apiUrl}/question`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  deleteQuestion(id: string): Observable<any> {
    const token = this.getToken();
    return this.http.request("delete", `${this.apiUrl}/question`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: { id },
    });
  }

  updateQuestion(data: object): Observable<any> {
    const token = this.getToken();
    return this.http.request("put", `${this.apiUrl}/question`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: data,
    });
  }
}
