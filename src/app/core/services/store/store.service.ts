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

  public question$ = new BehaviorSubject<{}>({});

  public questionSubject$ = this.question$.pipe(
    switchMap(() => this.printQuestion())
  );

  public constructor(
    private roomService: RoomService,
    private userService: UserService
  ) {}

  private printRoom() {
    return this.roomService.loadRoom();
  }

  public loginUser(user: User) {
    const { username, password } = user;
    return this.userService.signin(username, password);
  }

  private printQuestion() {
    return this.roomService.loadQuestions();
  }
}
