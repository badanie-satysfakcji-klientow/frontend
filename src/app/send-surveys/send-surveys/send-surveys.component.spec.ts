import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendSurveysComponent } from './send-surveys.component';

describe('SendSurveysComponent', () => {
  let component: SendSurveysComponent;
  let fixture: ComponentFixture<SendSurveysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendSurveysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendSurveysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
