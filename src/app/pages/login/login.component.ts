import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  protected loading: boolean;

  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
    this.loading = false;
  }

  loginForm = this.formBuilder.group({
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
  });

  async doLogin() {
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    const logged = await this.authService.login();
    this.loading = false;
    if (logged) {
      this.router.navigate(['/dashboard']);
    }
  }
}
