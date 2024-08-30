import { TestBed } from '@angular/core/testing';

import { TaskbarService } from './taskbar.service';

describe('TaskbarService', () => {
  let service: TaskbarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskbarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
