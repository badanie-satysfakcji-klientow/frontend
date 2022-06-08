import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFramesEditComponent } from './time-frames-edit.component';

describe('TimeFramesEditComponent', () => {
  let component: TimeFramesEditComponent;
  let fixture: ComponentFixture<TimeFramesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeFramesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFramesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
