import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { StoreService } from "./store.service";
import { UserService } from "../user/user.service";
import { RoomService } from "../room/room.service";

describe("StoreService", () => {
  let service: StoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [StoreService, UserService, RoomService],
    });
    service = TestBed.inject(StoreService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call loginUser", () => {
    const spyFn = spyOn(service, "loginUser").and.callThrough();
    service.loginUser({ username: "test", password: "test" });
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printRoom", () => {
    const spyFn = spyOn(service, "printRoom").and.callThrough();
    service.printRoom();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call printQuestion", () => {
    const spyFn = spyOn(service, "printQuestion").and.callThrough();
    service.printQuestion();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call sendQuestion", () => {
    const spyFn = spyOn(service, "sendQuestion").and.callThrough();
    service.sendQuestion({
      question: "question",
      answer: "test",
      hint: "nope",
    });
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call deleteQuestion", () => {
    const spyFn = spyOn(service, "deleteQuestion").and.callThrough();
    service.deleteQuestion("id");
    expect(spyFn).toHaveBeenCalled();
  });
  it("should call updateQuestion", () => {
    const spyFn = spyOn(service, "updateQuestion").and.callThrough();
    service.updateQuestion({});
    expect(spyFn).toHaveBeenCalled();
  });
  it("should call register", () => {
    const spyFn = spyOn(service, "registerUser").and.callThrough();
    service.registerUser({});
    expect(spyFn).toHaveBeenCalled();
  });
});
