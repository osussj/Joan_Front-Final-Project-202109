import { Injectable } from "@angular/core";
import { BehaviorSubject, switchMap } from "rxjs";
import { RoomService } from "../room/room.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  public room$ = new BehaviorSubject<{}>({});

  public roomSubject$ = this.room$.pipe(switchMap(() => this.printRoom()));

  public constructor(private roomService: RoomService) {}

  private printRoom() {
    return this.roomService.loadRoom();
  }
}
