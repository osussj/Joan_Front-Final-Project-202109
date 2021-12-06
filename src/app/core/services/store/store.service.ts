import { Injectable } from "@angular/core";
import { BehaviorSubject, debounceTime, switchMap } from "rxjs";
import { IQuestion } from "../../models/question";
import { IRoom } from "../../models/room";
import { IUser } from "../../models/user";
import { RoomService } from "../room/room.service";
import { UserService } from "../user/user.service";

@Injectable({
  providedIn: "root",
})
export class StoreService {
  public room$ = new BehaviorSubject<IRoom[]>([]);

  public roomSubject$ = this.room$.pipe(switchMap(() => this.printRoom()));

  public question$ = new BehaviorSubject<IQuestion[]>([]);

  public questionSubject$ = this.question$.pipe(
    debounceTime(50),
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

  public deleteQuestion(questionId: string) {
    return this.roomService.deleteQuestion(questionId);
  }

  public updateQuestion(question: object) {
    return this.roomService.updateQuestion(question);
  }
}
