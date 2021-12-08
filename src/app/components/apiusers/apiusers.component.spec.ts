import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ApiusersComponent } from "./apiusers.component";

describe("ApiusersComponent", () => {
  let component: ApiusersComponent;
  let fixture: ComponentFixture<ApiusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApiusersComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
