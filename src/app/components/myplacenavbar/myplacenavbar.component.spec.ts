import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyplacenavbarComponent } from './myplacenavbar.component';

describe('MyplacenavbarComponent', () => {
  let component: MyplacenavbarComponent;
  let fixture: ComponentFixture<MyplacenavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyplacenavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyplacenavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
