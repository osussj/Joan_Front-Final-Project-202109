import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs";
import { StoreService } from "src/app/core/services/store/store.service";

import { RegisterComponent } from "./register.component";

describe("RegisterComponent", () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let storeService: StoreService;

  const StoreServiceMock = {
    registerUser: () =>
      new Observable((observer) => {
        observer.next(component.router.navigate(["/login"]));
        observer.error("Hi");
      }),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([
          { path: "login", component: RegisterComponent },
        ]),
      ],
      providers: [
        {
          provide: StoreService,
          useValue: StoreServiceMock,
        },
      ],
      declarations: [RegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
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
    const spyFn = spyOn(storeService, "registerUser").and.callThrough();
    const nameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const usernameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const emailInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[2];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[3];
    const submitButton = fixture.debugElement.query(By.css("form"));

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

    expect(spyFn).toHaveBeenCalled();
  });
});
