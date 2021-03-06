import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_shared/_service/auth.service';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { FormComponent } from 'src/app/form/form.component';
import { Card } from 'src/app/_shared/_models/card';
import { CardService } from 'src/app/_shared/_service/card.service';

@Component({
  selector: 'app-header-home',
  templateUrl: './header-home.component.html',
  styleUrls: ['./header-home.component.scss']
})
export class HeaderHomeComponent implements OnInit {

  public cards: Card[] = [];

  constructor(public _authService: AuthService,
    private dialog: MatDialog,
    private cardService: CardService) { }

  

  ngOnInit() {
    this.cards = this.cardService.cards;
  }

  addCard(card: Card) {
    this.cardService.cards.push(card);
  }

  openDialog() {
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.width = '40%';
    dialogConfig.data = {title: 'Veuillez remplir le formulaire'}
    const dialogRef = this.dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.addCard(result)
      }
    });
  }

  editData(i: number, card: Card) {
    console.log(i, card)
    const dialogConfig: MatDialogConfig = new MatDialogConfig();
    dialogConfig.width = '40%';
    dialogConfig.data = {title: 'Veuillez remplir le formulaire', card: card}
    const dialogRef = this.dialog.open(FormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if(result) {
        console.log(result);
        this.cards[i] = result;
        console.log(this.cards);
      }
    });
  }

}
