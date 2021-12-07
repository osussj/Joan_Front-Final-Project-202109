import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { NavbarComponent } from "../navbar/navbar.component";

import { ProfileComponent } from "./profile.component";

describe("ProfileComponent", () => {
  let component: ProfileComponent;
  let fixture: ComponentFixture<ProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileComponent, NavbarComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FontAwesomeModule,
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render My profile title", () => {
    const expectedText = "My profile";
    const userTitle = fixture.debugElement.nativeElement.querySelector("h2");
    expect(userTitle.textContent).toContain(expectedText);
  });
});
