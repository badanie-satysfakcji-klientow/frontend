import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyItemClosedComponent } from './survey-item-closed.component';

describe('SurveyItemClosedComponent', () => {
  let component: SurveyItemClosedComponent;
  let fixture: ComponentFixture<SurveyItemClosedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyItemClosedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyItemClosedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
