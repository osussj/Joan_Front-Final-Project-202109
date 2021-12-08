import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterLinkWithHref } from "@angular/router";

import { MyplacenavbarComponent } from "./myplacenavbar.component";

describe("MyplacenavbarComponent", () => {
  let component: MyplacenavbarComponent;
  let fixture: ComponentFixture<MyplacenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyplacenavbarComponent],
      providers: [
        {
          provide: RouterLinkWithHref,
          useValue: {
            routerLink: "/test",
            routerLinkActiveOptions: { exact: true },
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplacenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render MYPLACE", () => {
    const expectedText = "MYPLACE";
    const [myplace] = fixture.debugElement.nativeElement.querySelectorAll("a");

    expect(myplace.textContent).toContain(expectedText);
  });
  it("should render LOGIN", () => {
    const expectedText = "LOGIN";
    const [, login] = fixture.debugElement.nativeElement.querySelectorAll("a");

    expect(login.textContent).toContain(expectedText);
  });
});
