import { TestBed } from '@angular/core/testing';

import { HttpService } from './http.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Post } from '../models/mock';

describe('HttpService', () => {
  let service: HttpService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(HttpService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be call getPosts', () => {
    // Mock data for the getPosts method
    const mockPosts: Post[] = [
      {
        userId: 1,
        id: 1,
        title: 'Test Post 1',
        body: 'This is the body of test post 1',
      },
      {
        userId: 2,
        id: 2,
        title: 'Test Post 2',
        body: 'This is the body of test post 2',
      },
    ];
    service.getPosts().subscribe((posts) => {
      expect(posts.length).toBe(2);
    });

    const req = httpMock.expectOne(
      'https://jsonplaceholder.typicode.com/posts'
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockPosts);
  });
});
