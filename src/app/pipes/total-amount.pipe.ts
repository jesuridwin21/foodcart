import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalAmount'
})
export class TotalAmountPipe implements PipeTransform {

  transform(allCartItems: any[]): number {
    if (!allCartItems || allCartItems.length === 0) {
      return 0;
    } else {
      return allCartItems.reduce((total, item) => total + item.price, 0)
    }
  }

}
