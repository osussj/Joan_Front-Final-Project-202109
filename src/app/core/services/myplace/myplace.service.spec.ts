import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";

import { MyplaceService } from "./myplace.service";

describe("MyplaceService", () => {
  let service: MyplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [],
    });
    service = TestBed.inject(MyplaceService);
  });

  it("should be created", () => {
    expect(service).toBeTruthy();
  });
});
