import { Component, OnInit } from "@angular/core";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-latestusers",
  templateUrl: "./latestusers.component.html",
  styleUrls: ["./latestusers.component.css"],
})
export class LatestusersComponent implements OnInit {
  users$ = this.storeService.user$;

  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    this.users$.next([]);
  }
}
