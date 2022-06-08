import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyConfigureComponent } from './survey-configure.component';

describe('SurveyConfigureComponent', () => {
  let component: SurveyConfigureComponent;
  let fixture: ComponentFixture<SurveyConfigureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyConfigureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyConfigureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
