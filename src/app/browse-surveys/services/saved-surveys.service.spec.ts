import { TestBed } from '@angular/core/testing';

import { SavedSurveysService } from './saved-surveys.service';

describe('SavedSurveysService', () => {
  let service: SavedSurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedSurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
