import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { LoginServiceService } from '../../service/login-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormField, MatInputModule, MatButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  token = '';
  constructor(
    readonly loginService: LoginServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  login() {
    this.loginService.login().subscribe({
      next: (res: any) => {
        console.log(res);
        this.token = res.access_token;
        localStorage.setItem('token', res.access_token);
        localStorage.setItem('refresh', res.refresh_token);
        this.router.navigate(['home']);
      },
    });
  }
}
