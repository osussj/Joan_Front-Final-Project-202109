import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MyplacenavbarComponent } from "../myplacenavbar/myplacenavbar.component";

import { MyplacehomeComponent } from "./myplacehome.component";

describe("MyplacehomeComponent", () => {
  let component: MyplacehomeComponent;
  let fixture: ComponentFixture<MyplacehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyplacehomeComponent, MyplacenavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplacehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render tom title", () => {
    const expectedText = "tom";
    const userTitle = fixture.debugElement.nativeElement.querySelector("h2");
    expect(userTitle.textContent).toContain(expectedText);
  });
  it("should render mark title", () => {
    const expectedText = "mark";
    const [, userTitle] =
      fixture.debugElement.nativeElement.querySelectorAll("h2");
    expect(userTitle.textContent).toContain(expectedText);
  });
  it("should render osu title", () => {
    const expectedText = "osu";
    const [, , userTitle] =
      fixture.debugElement.nativeElement.querySelectorAll("h2");
    expect(userTitle.textContent).toContain(expectedText);
  });
  it("should render What is MYPLACE? title", () => {
    const expectedText = "What is MYPLACE?";
    const [, , , userTitle] =
      fixture.debugElement.nativeElement.querySelectorAll("h2");
    expect(userTitle.textContent).toContain(expectedText);
  });
});
