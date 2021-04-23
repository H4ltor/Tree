import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LikeService {

constructor() { }

public like: number = 0;
public dislike: number = 0;

}
