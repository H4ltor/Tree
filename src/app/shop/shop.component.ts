import { Component, OnInit } from '@angular/core';
import { AuthService } from '../users/auth.service';
import { Card } from 'src/app/_shared/_models/card';
import { CardService } from 'src/app/_shared/_service/card.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  shop: any;
  shopDetails: any;

  constructor(private cardService: CardService
    ,private authService: AuthService) {}

  ngOnInit(): void {
    this._getShop();
  }

  _getShop(): void {
    this.authService.getShopItems().subscribe((data: any) => {
      this.shop = data.data;
      // this.shopDetails = data.data;
      console.log(this.shop);
    });
  }

  _emptyShop(): void {
    this.authService.emptyShop().subscribe(() => {
      this._getShop();
      alert('Pannier vide');
    });
  }


}
