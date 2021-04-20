import { Injectable } from '@angular/core';
import { Card } from '../_models/card';

@Injectable({
  providedIn: 'root'
})
export class CardService {

constructor() { }

public cards: Card[] = [];

}
