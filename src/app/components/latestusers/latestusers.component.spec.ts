import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LatestusersComponent } from "./latestusers.component";

describe("LatestusersComponent", () => {
  let component: LatestusersComponent;
  let fixture: ComponentFixture<LatestusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LatestusersComponent],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
