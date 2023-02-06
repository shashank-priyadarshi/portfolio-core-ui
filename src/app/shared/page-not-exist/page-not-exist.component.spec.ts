import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotExistComponent } from './page-not-exist.component';

describe('PageNotExistComponent', () => {
  let component: PageNotExistComponent;
  let fixture: ComponentFixture<PageNotExistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotExistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotExistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
