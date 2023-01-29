import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cardSearch'
})
export class CardSearchPipe implements PipeTransform {

  transform(allReceipes: any[], searchKeyWord: string): any[] {
    if (!allReceipes || allReceipes.length === 0) {
      return [];
    } else if (!searchKeyWord) {
      return allReceipes;
    } else {
      return allReceipes.filter(receipe => receipe.recipename.toLowerCase().indexOf(searchKeyWord.toLowerCase()) !== -1)
    }
  }

}
