/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { GuardService } from "./guard.service";

describe("AuthService", () => {
  let service: GuardService;

  let localStore: any;

  const token: string =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOWU4N2Y5NjRjMzBhN2YzZGRiMjU5NSIsIm5vbWJyZSI6Ik1hcmlvIiwibm9tYnJlVXN1YXJpbyI6Ik1hcmlvIiwidXJsRm90b1VzZXIiOiJodHRwczovL3N0b3JhZ2UuZ29vZ2xlYXBpcy5jb20vYmFjay1maW5hbC1wcm9qZWN0LTIwMjEwOS5hcHBzcG90LmNvbS9RdWVUZWNhLVVzZXItc29mdHdhcmUtZGV2ZWxvcG1lbnQtaXMtbm90LXN0cmVzc2Z1bC1zYXlzLXJvYmVydC0yMi15ZWFycy1vbGQtNDk0NTg4MjMtMTYzODcwMjg4MTI0NS0ucG5nIiwibGlrZXNVc2VyIjo2LCJyZWNldGFzIjpbIjYxOWZjYjVlNmVlYmEyYzZjZWMzMDQ1NCIsIjYxOWZkMWU4M2MxZmJmODIzYTQzZDgyNyIsIjYxYTdkNmRjNmZjYzk2MGFkMjdlOWQ5NCIsIjYxYTdkOTc5NmZjYzk2MGFkMjdlOWUxOCJdLCJpYXQiOjE2Mzg3MDQ2OTYsImV4cCI6MTYzODc5MTA5Nn0.eciI0CA2RNO1UidNLSu7ELlK5ZZF_SAVANytiqtQels";

  beforeEach(() => {
    localStore = { token };

    spyOn(window.localStorage, "getItem").and.callFake((key) =>
      key in localStore ? localStore[key] : null
    );
    spyOn(window.localStorage, "setItem").and.callFake(
      (key, value) => (localStore[key] = `${value}`)
    );
    spyOn(window.localStorage, "clear").and.callFake(() => (localStore = {}));

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule.withRoutes([
          { path: "signin", component: GuardService },
        ]),
      ],
      providers: [GuardService],
    });
    service = TestBed.inject(GuardService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });

  it("should call canActivate", () => {
    const spyFn = spyOn(service, "canActivate").and.callThrough();
    service.canActivate();
    expect(spyFn).toHaveBeenCalled();
  });

  it("should call canActivate false", () => {
    const spyFn = spyOn(service, "canActivate").and.callThrough();
    window.localStorage.clear();
    service.canActivate();
    expect(spyFn).toHaveBeenCalled();
  });
});
