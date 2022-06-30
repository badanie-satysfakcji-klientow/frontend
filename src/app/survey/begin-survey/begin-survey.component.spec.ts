import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginSurveyComponent } from './begin-survey.component';

describe('BeginSurveyComponent', () => {
  let component: BeginSurveyComponent;
  let fixture: ComponentFixture<BeginSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BeginSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
