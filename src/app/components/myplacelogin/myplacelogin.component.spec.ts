import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";

import { MyplaceloginComponent } from "./myplacelogin.component";

describe("MyplaceloginComponent", () => {
  let component: MyplaceloginComponent;
  let fixture: ComponentFixture<MyplaceloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule,
      ],
      declarations: [MyplaceloginComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplaceloginComponent);
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
    const usernameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const submitButton = fixture.debugElement.query(By.css("form"));
    spyOn(component, "onSubmit");

    usernameInput.value = "guest";
    passwordInput.value = "tseug";

    usernameInput.dispatchEvent(new Event("input"));
    passwordInput.dispatchEvent(new Event("input"));
    submitButton.triggerEventHandler("submit", null);
    fixture.detectChanges();

    expect(component.onSubmit).toHaveBeenCalledTimes(1);
  });
});
