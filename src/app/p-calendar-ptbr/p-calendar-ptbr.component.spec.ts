import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCalendarPtbrComponent } from './p-calendar-ptbr.component';

describe('PCalendarPtbrComponent', () => {
  let component: PCalendarPtbrComponent;
  let fixture: ComponentFixture<PCalendarPtbrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCalendarPtbrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCalendarPtbrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
