import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";
import { RouterLinkWithHref } from "@angular/router";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from "./navbar.component";

describe("NavbarComponent", () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [NavbarComponent],
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
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should render Home Icon", () => {
    const expectedText = "Home";
    const [homeIcon] = fixture.debugElement.nativeElement.querySelectorAll("a");

    expect(homeIcon.textContent).toContain(expectedText);
  });
  it("should render Kot Icon", () => {
    const expectedText = "Kot";
    const [, kotIcon] =
      fixture.debugElement.nativeElement.querySelectorAll("a");

    expect(kotIcon.textContent).toContain(expectedText);
  });
  it("should render Profile Icon", () => {
    const expectedText = "Profile";
    const [, , profileIcon] =
      fixture.debugElement.nativeElement.querySelectorAll("a");

    expect(profileIcon.textContent).toContain(expectedText);
  });
  it("should render Home Icon with a routerLink", () => {
    const expectedText = "Home";
    const [homeIcon] = fixture.debugElement.nativeElement.querySelectorAll("a");
    const [homeTextIcon] = fixture.debugElement.queryAll(By.css("fa-icon"));
    const routerLinkInstance = homeTextIcon.injector.get(RouterLinkWithHref);

    expect(routerLinkInstance.routerLink).toEqual("/test");
    expect(homeIcon.textContent).toContain(expectedText);
  });
  it("should render Kot Icon with a routerLink", () => {
    const expectedText = "Kot";
    const [, kotIcon] =
      fixture.debugElement.nativeElement.querySelectorAll("a");
    const [, kotTextIcon] = fixture.debugElement.queryAll(By.css("fa-icon"));
    const routerLinkInstance = kotTextIcon.injector.get(RouterLinkWithHref);

    expect(routerLinkInstance.routerLink).toEqual("/test");
    expect(kotIcon.textContent).toContain(expectedText);
  });
  it("should render Profile Icon with a routerLink", () => {
    const expectedText = "Profile";
    const [, , profileIcon] =
      fixture.debugElement.nativeElement.querySelectorAll("a");
    const [, , profileTextIcon] = fixture.debugElement.queryAll(
      By.css("fa-icon")
    );
    const routerLinkInstance = profileTextIcon.injector.get(RouterLinkWithHref);

    expect(routerLinkInstance.routerLink).toEqual("/test");
    expect(profileIcon.textContent).toContain(expectedText);
  });
});
