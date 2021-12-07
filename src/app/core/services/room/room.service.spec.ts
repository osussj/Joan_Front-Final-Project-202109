import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { RoomService } from "./room.service";

describe("RoomService", () => {
  let service: RoomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [],
    });
    service = TestBed.inject(RoomService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call loadRoom", () => {
    const spyFn = spyOn(service, "loadRoom").and.callThrough();
    service.loadRoom();

    expect(spyFn).toHaveBeenCalled();
  });
  it("should call loadQuestions", () => {
    const spyFn = spyOn(service, "loadQuestions").and.callThrough();
    service.loadQuestions();

    expect(spyFn).toHaveBeenCalled();
  });
  it("should call deleteQuestion", () => {
    const spyFn = spyOn(service, "deleteQuestion").and.callThrough();
    service.deleteQuestion("8385885");

    expect(spyFn).toHaveBeenCalled();
  });
  it("should call postQuestion", () => {
    const spyFn = spyOn(service, "postQuestion").and.callThrough();
    service.postQuestion({ hint: "test", answer: "test", question: "test" });

    expect(spyFn).toHaveBeenCalled();
  });
  it("should call updateQuestion", () => {
    const spyFn = spyOn(service, "updateQuestion").and.callThrough();
    service.updateQuestion({ hint: "test", answer: "test", question: "test" });

    expect(spyFn).toHaveBeenCalled();
  });
});
