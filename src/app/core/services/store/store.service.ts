import { Injectable } from "@angular/core";
import { BehaviorSubject, switchMap } from "rxjs";
import { User } from "../../models/user";
import { RoomService } from "../room/room.service";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  public room$ = new BehaviorSubject<{}>({});

  public roomSubject$ = this.room$.pipe(switchMap(() => this.printRoom()));

  public user$ = new BehaviorSubject<User>({ username: "", password: "" });

  public userSubject$ = this.user$.pipe(
    switchMap((user) => this.loginUser(user.username, user.password))
  );

  public constructor(
    private roomService: RoomService,
    private userService: UserService
  ) {}

  private printRoom() {
    return this.roomService.loadRoom();
  }

  private loginUser(username: string, password: string) {
    return this.userService.signin(username, password);
  }
}
