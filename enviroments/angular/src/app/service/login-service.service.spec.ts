import { TestBed } from '@angular/core/testing';

import { LoginServiceService } from './login-service.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('LoginServiceService', () => {
  let service: LoginServiceService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(LoginServiceService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be login', () => {
    let mock = {
      email: 'john@mail.com',
      password: 'changeme',
    };
    service.login().subscribe({
      next: (res) => {
        expect(res).toEqual({ mock });
      },
    });
    let req = httpMock.expectOne('https://api.escuelajs.co/api/v1/auth/login');
    expect(req.request.method).toBe('POST');
    req.flush(mock);
  });
});
