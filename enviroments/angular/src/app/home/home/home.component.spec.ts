import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpService } from '../../service/http.service';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: jasmine.SpyObj<HttpService>;
  let serviceSpy: jasmine.SpyObj<HttpService>;
  let mock = [
    {
      userId: 1,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ];
  let mock2 = [
    {
      userId: 2,
      id: 1,
      title:
        'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
      body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
    },
  ];
  beforeEach(async () => {
    serviceSpy = jasmine.createSpyObj('HttpService', ['getPosts']);

    serviceSpy.getPosts.and.returnValue(of(mock));

    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        HttpClientTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: HttpService, useValue: serviceSpy },
        {
          provide: ActivatedRoute,
          useValue: { params: of({ id: '123' }) }, // Mock route params
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(HttpService) as jasmine.SpyObj<HttpService>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if get posts is called', () => {
    serviceSpy.getPosts.calls.reset(); // Reset before verifying
    service.getPosts.and.callFake(() => of(mock2));
    component.ngOnInit();
    expect(service.getPosts).toHaveBeenCalled();
    expect(component.mock).toEqual(mock2);
  });
});
