import { TestBed } from '@angular/core/testing';

import { SendSurveyService } from './send-survey.service';

describe('SendSurveyService', () => {
  let service: SendSurveyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendSurveyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
