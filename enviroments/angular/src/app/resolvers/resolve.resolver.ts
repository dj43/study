import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { HttpService } from '../service/http.service';
import { Observable } from 'rxjs';
import { Post } from '../models/mock';

export const resolveResolver: ResolveFn<Post[]> = (route, state) => {
  let servive = inject(HttpService);
  return servive.getPosts();
};
