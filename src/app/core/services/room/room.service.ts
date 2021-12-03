import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class RoomService {
  apiUrl: string =
    "https://proyecto-final-joan-back.herokuapp.com/api/room/node";

  constructor(private http: HttpClient) {}

  loadRoom(): Observable<any> {
    return this.http.get(this.apiUrl, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "").token
        }`,
      },
    });
  }

  loadQuestions(): Observable<any> {
    return this.http.get(`${this.apiUrl}/question`, {
      headers: new HttpHeaders({
        "Content-type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "").token
        }`,
      }),
    });
  }
}
