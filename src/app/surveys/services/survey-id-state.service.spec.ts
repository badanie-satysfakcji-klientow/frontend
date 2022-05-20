import { TestBed } from '@angular/core/testing';

import { SurveyIdStateService } from './survey-id-state.service';

describe('SurveyIdStateService', () => {
  let service: SurveyIdStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyIdStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
