import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../models/mock';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private httpClient: HttpClient) {}
  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }

  // getPosts(): Observable<Partial<Post>[]> {
  //   return this.httpClient
  //     .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  //     .pipe(
  //       map((posts) =>
  //         posts.map((post) => {
  //           return { id: post.id, title: post.title };
  //         })
  //       )
  //     );
  // }
}
