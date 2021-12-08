import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { Observable } from "rxjs";
import { StoreService } from "src/app/core/services/store/store.service";
import { SigninComponent } from "./signin.component";

describe("SigninComponent", () => {
  let component: SigninComponent;
  let fixture: ComponentFixture<SigninComponent>;
  let storeService: StoreService;

  const StoreServiceMock = {
    loginUser: () =>
      new Observable((observer) => {
        observer.next(component.router.navigate(["/dashboard"]));
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
          { path: "dashboard", component: SigninComponent },
        ]),
      ],
      providers: [
        {
          provide: StoreService,
          useValue: StoreServiceMock,
        },
      ],
      declarations: [SigninComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SigninComponent);
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
    const spyFn = spyOn(storeService, "loginUser").and.callThrough();
    const usernameInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[0];
    const passwordInput =
      fixture.debugElement.nativeElement.querySelectorAll("input")[1];
    const submitButton = fixture.debugElement.query(By.css("form"));

    usernameInput.value = "guest";
    passwordInput.value = "tseug";

    usernameInput.dispatchEvent(new Event("input"));
    passwordInput.dispatchEvent(new Event("input"));
    submitButton.triggerEventHandler("submit", null);
    fixture.detectChanges();

    expect(spyFn).toHaveBeenCalled();
  });
});
