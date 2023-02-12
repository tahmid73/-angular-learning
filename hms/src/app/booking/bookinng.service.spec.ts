import { TestBed } from '@angular/core/testing';

import { BookinngService } from './bookinng.service';

describe('BookinngService', () => {
  let service: BookinngService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookinngService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
