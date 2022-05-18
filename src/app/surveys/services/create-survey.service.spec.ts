import { TestBed } from '@angular/core/testing';

import { SurveysService } from './surveys.service';

describe('CreateSurveyService', () => {
  let service: SurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
