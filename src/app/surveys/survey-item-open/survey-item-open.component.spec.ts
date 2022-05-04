import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyItemOpenComponent } from './survey-item-open.component';

describe('SurveyItemOpenComponent', () => {
  let component: SurveyItemOpenComponent;
  let fixture: ComponentFixture<SurveyItemOpenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyItemOpenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyItemOpenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
