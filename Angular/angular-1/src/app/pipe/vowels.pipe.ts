import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vowels',
  standalone: true
})
export class VowelsPipe implements PipeTransform {

  transform(value: string): string {
    let vowels=['a','e','i','o','u']
    let str=''
    for(let i=0;i<value.length;i++){
      if(!vowels.includes(value[i])){
        str+=value[i]
      }
    }
    return str;
  }

}
