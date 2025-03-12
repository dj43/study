import { Routes } from '@angular/router';
import { HomeChild1Component } from './home-child1/home-child1.component';
import { HomeComponent } from './home/home.component';
import { resolveResolver } from '../resolvers/resolve.resolver';

export const homeRoutes: Routes = [
  {
    path: 'child',
    component: HomeChild1Component,
    resolve: { user: resolveResolver },
  },
  { path: '**', redirectTo: '' },
];
