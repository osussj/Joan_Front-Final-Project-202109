import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { IQuestion } from "../../models/question";

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
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "").token
        }`,
      },
    });
  }

  postQuestion(data: IQuestion): Observable<any> {
    return this.http.post(`${this.apiUrl}/question`, data, {
      headers: {
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "").token
        }`,
      },
    });
  }

  deleteQuestion(id: string): Observable<any> {
    return this.http.request("delete", `${this.apiUrl}/question`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          JSON.parse(localStorage.getItem("user") || "").token
        }`,
      },
      body: { id },
    });
  }
}
