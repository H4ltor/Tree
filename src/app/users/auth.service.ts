import { Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {


  private _registerUrl = "http://localhost:3000/api/register";
  private _loginUrl = "http://localhost:3000/api/login";
  private _shopUrl = "http://localhost:3000/api/shop";
  private _cardUrl = "http://localhost:3000/api/card"

  constructor(private http: HttpClient,
    private _router: Router) { }

  registerUser(user: any) {
    return this.http.post<any>(this._registerUrl, user)
  }

  loginUser(user: any) {
    return this.http.post<any>(this._loginUrl, user)
  }

  loggedIn() {
    return !!localStorage.getItem('token')
  }

  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
  }

  getToken() {
    return localStorage.getItem('token')
  }

  //test -----¨

  getAllCards() {
    return this.http.get(this._cardUrl);
  }

  addToShop(payload) { //(card ?)
    return this.http.post<any>(this._shopUrl, payload);
  }

  getShopItems() {
    return this.http.get(this._shopUrl);
  }

  increaseQty(payload) {
    return this.http.post<any>(this._shopUrl, payload);
  }

  emptyShop() {
    return this.http.delete(this._shopUrl);
  }
}
