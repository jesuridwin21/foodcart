import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortReceipe'
})
export class SortReceipePipe implements PipeTransform {

  transform(receipes: any[], order: string): any[] {
    if (!receipes) {
      return [];
    } else if (!order) {
      return receipes;
    } else {
      if (order === 'lowToHigh') {
        return receipes.sort((receipe1, receipe2) => receipe1.price - receipe2.price)
      } else {
        return receipes.sort((receipe1, receipe2) => receipe1.price - receipe2.price).reverse()
      }
    }
  }

}
