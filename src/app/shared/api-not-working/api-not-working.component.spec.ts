import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiNotWorkingComponent } from './api-not-working.component';

describe('ApiNotWorkingComponent', () => {
  let component: ApiNotWorkingComponent;
  let fixture: ComponentFixture<ApiNotWorkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiNotWorkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiNotWorkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
