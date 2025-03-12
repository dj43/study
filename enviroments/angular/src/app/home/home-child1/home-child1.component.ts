import { Component } from '@angular/core';
import { DirectDirective } from '../../directives/direct.directive';

@Component({
  selector: 'app-home-child1',
  standalone: true,
  imports: [],
  hostDirectives: [DirectDirective],

  templateUrl: './home-child1.component.html',
  styleUrl: './home-child1.component.scss',
})
export class HomeChild1Component {
  logout() {
    localStorage.removeItem('token');
  }
}
