import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SumService {
  constructor() {}
  
  add(num:any,sum:number=0):number {
    
    for (let i = 1; i <=num; i++) {
      console.log(i)
      sum += i;
    }
    return sum
  }
}
