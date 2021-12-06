import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { MyplaceadminComponent } from "./myplaceadmin.component";

describe("MyplaceadminComponent", () => {
  let component: MyplaceadminComponent;
  let fixture: ComponentFixture<MyplaceadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyplaceadminComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplaceadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render Welcome back title", () => {
    const expectedText = "Welcome back, user.username";
    const userTitle = fixture.debugElement.nativeElement.querySelector("h1");
    expect(userTitle.textContent).toContain(expectedText);
  });
  it("Should render a button disabled", () => {
    const submitButton = fixture.debugElement.query(By.css("button"));

    expect(submitButton.nativeElement.disabled).toBeTrue();
  });
  it("Should have button with text Download backup", () => {
    const button = fixture.debugElement.nativeElement.querySelector("button");
    expect(button.textContent).toContain("Download Backup");
  });
});
