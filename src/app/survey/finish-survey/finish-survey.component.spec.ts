import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishSurveyComponent } from './finish-survey.component';

describe('FinishSurveyComponent', () => {
  let component: FinishSurveyComponent;
  let fixture: ComponentFixture<FinishSurveyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinishSurveyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishSurveyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
