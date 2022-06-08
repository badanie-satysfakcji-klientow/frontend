import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyItemGridComponent } from './survey-item-grid.component';

describe('SurveyItemGridComponent', () => {
  let component: SurveyItemGridComponent;
  let fixture: ComponentFixture<SurveyItemGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyItemGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyItemGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
