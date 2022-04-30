import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveyItemListComponent } from './survey-item-list.component';

describe('SurveyItemContentListComponent', () => {
  let component: SurveyItemListComponent;
  let fixture: ComponentFixture<SurveyItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveyItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SurveyItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
