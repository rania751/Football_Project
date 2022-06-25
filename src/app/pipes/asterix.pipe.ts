import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asterix'
})
export class AsterixPipe implements PipeTransform {

  transform(ch : string){


    let res = ' ';

    let voyelles = [ 'a', 'e', 'i', 'o', 'u', 'y', 'A', 'E', 'O', 'I', 'Y', 'U' ];

for (let i = 0; i < ch.length; i++) {

  let inter = ch[ i ];

  for (let j = 0; j < voyelles.length; j++) {

    if (ch[i].toLowerCase() == voyelles[j]) {


      inter = '*';
      break;
    }
  }
  res = res + inter;
}
    return res;
  }

}