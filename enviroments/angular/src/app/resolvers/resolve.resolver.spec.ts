import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolveResolver } from './resolve.resolver';
import { Post } from '../models/mock';

describe('resolveResolver', () => {
  const executeResolver: ResolveFn<Post[]> = (...resolverParameters) =>
    TestBed.runInInjectionContext(() => resolveResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
