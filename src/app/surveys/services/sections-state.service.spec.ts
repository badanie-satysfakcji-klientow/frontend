import { TestBed } from '@angular/core/testing';

import { SectionsStateService } from './sections-state.service';

describe('SectionsStateService', () => {
  let service: SectionsStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SectionsStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
