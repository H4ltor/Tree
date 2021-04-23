import { Component, OnInit, Input } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { FormComponent } from 'src/app/form/form.component';
import { Card } from 'src/app/_shared/_models/card';
import { CardService } from 'src/app/_shared/_service/card.service';
import { LikeService } from 'src/app/_shared/_service/like.service';
import { AuthService } from '../../users/auth.service';
@Component({
  selector: 'app-card-home',
  templateUrl: './card-home.component.html',
  styleUrls: ['./card-home.component.scss']
})
export class CardHomeComponent implements OnInit {

  public cards: Card[] = [];
  public like: number = 0;
  public dislike: number = 0;
  public isLiked: boolean = true;
  public isDisliked: boolean = true;
  //@Input() postLoveIts: number;

  constructor(private dialog: MatDialog,
    private cardService: CardService, public likeService: LikeService,
    private authService: AuthService) { }

  ngOnInit() {
    this.cards = this.cardService.cards;
    this.like = this.likeService.like;
  }

  onLoveIt(event: any) {
    this.likeService.like++;
    if(this.likeService.like >= 1) {
      this.likeService.like = 1;
    }
    if(this.isDisliked == true) {
      this.isDisliked = false;
    }
    this.isLiked = true;
    console.log(this.likeService.like);

  }
  dontLoveIt(event: any) {
   this.likeService.dislike--;

   if(this.likeService.dislike >= -1) {
   this.likeService.dislike = 1;
   }
   console.log(this.likeService.dislike);
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
  //test ----
  _getCards(): void {
    this.authService.getAllCards().subscribe((data: any) => {
      this.cards = data.data;
      console.log(this.cards);
    });
    }
    // pas besoin de quantity pour le addIteamShop
    _addItemToShop(id): void {
      let payload = {
        cardId: id,
    };
    this.authService.addToShop(payload).subscribe(() => {
      this._getCards();
      alert('Card Ajoutée');
    });
    }
  }
