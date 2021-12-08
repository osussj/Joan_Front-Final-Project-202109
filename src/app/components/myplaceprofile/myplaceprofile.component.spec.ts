import { ComponentFixture, TestBed } from "@angular/core/testing";
import { MyplacenavbarComponent } from "../myplacenavbar/myplacenavbar.component";

import { MyplaceprofileComponent } from "./myplaceprofile.component";

describe("MyplaceprofileComponent", () => {
  let component: MyplaceprofileComponent;
  let fixture: ComponentFixture<MyplaceprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyplaceprofileComponent, MyplacenavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplaceprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render tom title", () => {
    const expectedText = "mark";
    const userTitle = fixture.debugElement.nativeElement.querySelector("h2");
    expect(userTitle.textContent).toContain(expectedText);
  });
  it("should render MYPLACE title", () => {
    const expectedText = "WELCOME TO MY PLACE";
    const userTitle = fixture.debugElement.nativeElement.querySelector("h1");
    expect(userTitle.textContent).toContain(expectedText);
  });
});
