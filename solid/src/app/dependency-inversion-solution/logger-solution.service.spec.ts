import { TestBed } from '@angular/core/testing';

import { LoggerSolutionService } from './logger-solution.service';

describe('LoggerSolutionService', () => {
  let service: LoggerSolutionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerSolutionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
