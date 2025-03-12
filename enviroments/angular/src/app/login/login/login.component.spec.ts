import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { LoginServiceService } from '../../service/login-service.service';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let service: jasmine.SpyObj<LoginServiceService>;
  const mockActivatedRoute = {
    snapshot: {
      paramMap: {
        get: (key: string) => '123', // Mock a route parameter
      },
    },
  };
  beforeEach(async () => {
    let LoginSpy = jasmine.createSpyObj('LoginService', ['login']);
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule],
      providers: [
        {
          provide: LoginServiceService,
          useValue: LoginSpy,
        },
        { provide: ActivatedRoute, useValue: mockActivatedRoute }, // Provide mock ActivatedRoute
      ],
    }).compileComponents();
    service = TestBed.inject(
      LoginServiceService
    ) as jasmine.SpyObj<LoginServiceService>;
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    service.login.and.returnValue(of({ access_token: 'token' }));
    component.login();
    expect(component.token).toBe('token');
    expect(localStorage.getItem('token')).toBe('token');
  });
});
