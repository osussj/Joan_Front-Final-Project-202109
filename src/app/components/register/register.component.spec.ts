import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { RegisterComponent } from "./register.component";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [RegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("Should render a button disabled", () => {
    const submitButton = fixture.debugElement.query(By.css("button"));

    expect(submitButton.nativeElement.disabled).toBeTrue();
  });
  it("should be valid when the user fills in all the inputs", () => {
    const nameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const usernameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[2];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[3];
    const submitButton = fixture.debugElement.query(By.css("form"));
    spyOn(component, "onSubmit");

    nameInput.value = "guest";
    usernameInput.value = "guest";
    passwordInput.value = "tseug";
    emailInput.value = "guest@guest.com";

    usernameInput.dispatchEvent(new Event("input"));
    passwordInput.dispatchEvent(new Event("input"));
    nameInput.dispatchEvent(new Event("input"));
    emailInput.dispatchEvent(new Event("input"));
    submitButton.triggerEventHandler("submit", null);
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
});
