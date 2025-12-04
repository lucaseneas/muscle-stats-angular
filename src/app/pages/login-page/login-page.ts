import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../services/login-service/login-service';
import { UserLogin } from '../../models/userLogin';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  providers:[LoginService],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
  readonly _loginService = inject(LoginService);

  loginForm :any = new FormGroup({
    email: new FormControl('', [Validators.required,Validators.email]),
    password: new FormControl('', [Validators.required,Validators.minLength(5),Validators.maxLength(20)])
  });

  login(){
    const userLogin:UserLogin = this.loginForm.value;
    this._loginService.login(userLogin).subscribe({
      next: (res) => {
        console.log('Login success:', res);
      },
      error: (err) => {
        console.error('Login error:', err);
      }
    });
  }
}
