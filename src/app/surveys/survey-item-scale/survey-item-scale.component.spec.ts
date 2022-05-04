import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyItemScaleComponent } from './survey-item-scale.component';

describe('SurveyItemScaleComponent', () => {
  let component: SurveyItemScaleComponent;
  let fixture: ComponentFixture<SurveyItemScaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyItemScaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyItemScaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
