import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NameGenerationService{
  private names: string[] = [
    'Nakita Hook',
    'Franciszek Gilliam',
    'Lewys Mccartney',
    'Rosie Glenn',
    'Sanaya Ahmed',
    'Vickie Hamer',
    'Jordan-Lee Parker',
    'Sky Byrd',
    'Jonas Ramsey',
    'Fabian Flowers]'
  ];

  getRandomName(): string {
    return this.names[this.getRandomNumber(0,9)];
  }

  protected getRandomNumber(min: number, max: number): number{
    return Math.floor(Math.random()*(max-min) + min);
  }
}
