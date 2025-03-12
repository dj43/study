import { Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { resolveResolver } from './resolvers/resolve.resolver';
import { LoginComponent } from './login/login/login.component';
import { authGuard } from './gaurd/auth.guard';

export const routes: Routes = [
  {
    path: 'home',
    canMatch: [authGuard],
    loadComponent: () =>
      import('../app/home/home/home.component').then((m) => m.HomeComponent),
    loadChildren: () =>
      import('../app/home/home.routes').then((m) => m.homeRoutes),
  },
  {
    path: 'login',
    // canMatch: [authGuard],
    component: LoginComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
