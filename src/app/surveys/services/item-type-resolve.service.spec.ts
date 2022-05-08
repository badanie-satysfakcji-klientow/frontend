import { TestBed } from '@angular/core/testing';

import { ItemTypeResolveService } from './item-type-resolve.service';

describe('SurveyItemTypeResolveService', () => {
  let service: ItemTypeResolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItemTypeResolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
