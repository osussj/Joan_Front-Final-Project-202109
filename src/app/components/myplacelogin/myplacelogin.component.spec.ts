import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { RouterTestingModule } from "@angular/router/testing";
import { ToastrService } from "ngx-toastr";
import { Observable } from "rxjs";
import { StoreService } from "src/app/core/services/store/store.service";
import { MyplacenavbarComponent } from "../myplacenavbar/myplacenavbar.component";

import { MyplaceloginComponent } from "./myplacelogin.component";

describe("MyplaceloginComponent", () => {
  let component: MyplaceloginComponent;
  let fixture: ComponentFixture<MyplaceloginComponent>;
  let storeService: StoreService;

  const ToastrServiceMock = {
    success: () => {},
    error: () => {},
  };

  const StoreServiceMock = {
    loginUserNode: () =>
      new Observable((observer) => {
        observer.next(component.router.navigate(["/myplace/admin"]));
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
          { path: "myplace/admin", component: MyplaceloginComponent },
        ]),
      ],
      providers: [
        {
          provide: StoreService,
          useValue: StoreServiceMock,
        },
        {
          provide: ToastrService,
          useValue: ToastrServiceMock,
        },
      ],
      declarations: [MyplaceloginComponent, MyplacenavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplaceloginComponent);
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
    const spyFn = spyOn(storeService, "loginUserNode").and.callThrough();
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
  it("should render WELCOME TO MY PLACE title", () => {
    const expectedText = "WELCOME TO MY PLACE";
    const mainTitle = fixture.debugElement.nativeElement.querySelector("h1");
    expect(mainTitle.textContent).toContain(expectedText);
  });
  it("should render LOGIN title", () => {
    const expectedText = "LOGIN";
    const loginTitle = fixture.debugElement.nativeElement.querySelector("h2");
    expect(loginTitle.textContent).toContain(expectedText);
  });
});
