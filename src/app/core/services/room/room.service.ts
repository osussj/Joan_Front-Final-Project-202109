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
      headers: new HttpHeaders({
        "Content-type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZ3Vlc3QiLCJ1c2VybmFtZSI6Imd1ZXN0IiwiaWQiOiI2MTljYmIzNGZlZDgxNzdlNTA2ZTZiZWEiLCJlbWFpbCI6Imd1ZXN0QGd1ZXN0LmNvbSIsImF2YXRhciI6Imd1ZXN0LmpwZyIsImlhdCI6MTYzNzc0NTI2OX0.B4fV8Lhag_-XvtX2646q5BsRJMndhsUrt7FPm1MwytM",
      }),
    });
  }
}
