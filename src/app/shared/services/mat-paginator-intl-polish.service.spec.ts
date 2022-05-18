import { TestBed } from '@angular/core/testing';

import { MatPaginatorIntlPolishService } from './mat-paginator-intl-polish.service';

describe('MatPaginatorIntlPolishService', () => {
  let service: MatPaginatorIntlPolishService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPaginatorIntlPolishService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
