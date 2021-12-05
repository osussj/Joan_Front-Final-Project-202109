import { ComponentFixture, TestBed } from "@angular/core/testing";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { StoreService } from "src/app/core/services/store/store.service";
import { BehaviorSubject, of } from "rxjs";
import { RoomComponent } from "./room.component";
import { IRoom, defaultRoom } from "../../core/models/room";
import { NavbarComponent } from "../navbar/navbar.component";

describe("RoomComponent", () => {
  let component: RoomComponent;
  let fixture: ComponentFixture<RoomComponent>;

  const storeServiceMock = {
    printRoom: () => of({ id: "2", name: "Test", questions: {} }),
    room$: new BehaviorSubject<IRoom[]>([defaultRoom]),
  };
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FontAwesomeModule,
        HttpClientTestingModule,
        RouterTestingModule,
      ],
      declarations: [RoomComponent, NavbarComponent],
      providers: [
        {
          provide: StoreService,
          useValue: storeServiceMock,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomComponent);
    component = fixture.componentInstance;
    TestBed.inject(StoreService);
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should render Dashboard title", () => {
    const expectedText = "Dashboard";
    const image = fixture.debugElement.nativeElement.querySelector("h2");
    expect(image.textContent).toContain(expectedText);
  });
  it("should render Based on your experience title", () => {
    const expectedText = "Based on your experience";
    const [title] = fixture.debugElement.nativeElement.querySelectorAll("h3");
    expect(title.textContent).toContain(expectedText);
  });
  it("should render Feature title", () => {
    const expectedText = "Feature";
    const [, title] = fixture.debugElement.nativeElement.querySelectorAll("h3");
    expect(title.textContent).toContain(expectedText);
  });
});
