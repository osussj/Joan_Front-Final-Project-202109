import { Component, OnInit } from "@angular/core";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-apiusers",
  templateUrl: "./apiusers.component.html",
  styleUrls: ["./apiusers.component.css"],
})
export class ApiusersComponent implements OnInit {
  latestUsersNode$ = this.storeService.latestUsers$;

  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    this.latestUsersNode$.next([]);
  }
}
