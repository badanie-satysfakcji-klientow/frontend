import { TestBed } from '@angular/core/testing';

import { SurveyResolverService } from './survey-resolver.service';

describe('SurveyResolverService', () => {
  let service: SurveyResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
