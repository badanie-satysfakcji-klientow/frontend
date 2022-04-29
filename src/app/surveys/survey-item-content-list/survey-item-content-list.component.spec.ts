import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyItemContentListComponent } from './survey-item-content-list.component';

describe('SurveyItemContentListComponent', () => {
  let component: SurveyItemContentListComponent;
  let fixture: ComponentFixture<SurveyItemContentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyItemContentListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyItemContentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
