import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { UserLogin } from '../../models/userLogin';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  url="http://localhost:8080/auth/login"
  private _httpClient = inject(HttpClient);

  login(userLogin:UserLogin){
    
    return this._httpClient.post<LoginResponse>(this.url,userLogin).pipe(
      tap((value) => {
        sessionStorage.setItem("token", value.token)
        sessionStorage.setItem("email", value.email)
      })
    );
  }
}
