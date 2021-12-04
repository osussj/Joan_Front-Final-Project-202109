import { Injectable } from "@angular/core";
import { BehaviorSubject, switchMap } from "rxjs";
import { IQuestion } from "../../models/question";
import { IUser } from "../../models/user";
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

  public printRoom() {
    return this.roomService.loadRoom();
  }

  public loginUser(user: IUser) {
    const { username, password } = user;
    return this.userService.signin(username, password);
  }

  public printQuestion() {
    return this.roomService.loadQuestions();
  }

  public sendQuestion(question: IQuestion) {
    return this.roomService.postQuestion(question);
  }
}
