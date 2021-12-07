import { Component, OnInit } from "@angular/core";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent implements OnInit {
  usersProfile$ = this.storeService.userProfile$;

  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    this.usersProfile$.next({});
  }
}
