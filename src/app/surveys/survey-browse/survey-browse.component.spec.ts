import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyBrowseComponent } from './survey-browse.component';

describe('SurveyBrowseComponent', () => {
  let component: SurveyBrowseComponent;
  let fixture: ComponentFixture<SurveyBrowseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyBrowseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyBrowseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
