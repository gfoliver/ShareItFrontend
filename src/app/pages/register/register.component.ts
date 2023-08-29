import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  protected loading: boolean;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { 
    this.loading = false;
  }

  registerForm = this.formBuilder.group({
    name: ['', Validators.required],
    email: ['', Validators.compose([Validators.required, Validators.email])],
    password: ['', Validators.required],
    passwordConfirmation: ['', Validators.required],
  });

  async doRegister() {
    if (this.registerForm.invalid) {
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
