import { TestBed } from '@angular/core/testing';

import { LearningResourceService } from './learning-resource.service';

describe('LearningResourceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LearningResourceService = TestBed.get(LearningResourceService);
    expect(service).toBeTruthy();
  });
});
