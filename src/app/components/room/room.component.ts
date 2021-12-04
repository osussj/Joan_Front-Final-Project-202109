import { Component, AfterViewInit } from "@angular/core";
import { StoreService } from "src/app/core/services/store/store.service";

@Component({
  selector: "escroom-room",
  templateUrl: "./room.component.html",
  styleUrls: ["./room.component.css"],
})
export class RoomComponent implements AfterViewInit {
  allrooms$ = this.storeService.room$;

  constructor(public storeService: StoreService) {}

  ngAfterViewInit() {
    this.allrooms$.next([]);
  }
}
