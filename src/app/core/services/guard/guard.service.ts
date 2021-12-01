import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class GuardService {
  constructor(private route: Router) {}

  canActivate(): boolean {
    if (localStorage.getItem("user")) {
      return true;
    }
    this.route.navigate(["/signin"]);
    return false;
  }
}
