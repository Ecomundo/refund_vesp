import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { CanActivate, Router } from '@angular/router';
import { Global } from './global.service';


@Injectable()
export class LoginService implements CanActivate {

  public url: string;
  public token: string;

  constructor(private _http: HttpClient, public router: Router) {
    this.url = Global.url;

  }

  canActivate() {

    if (localStorage.getItem('token')) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }

  signup(user: any) {

    const json = JSON.stringify(user);
    const params = json;
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this._http.post(this.url + 'Paymentez', params, { headers })
    .map(res => {
      if (res['token']) {
        localStorage.setItem('token', res['token']);
        return true;
      }
    });

  }

}
