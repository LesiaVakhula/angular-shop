import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(array: any, param: string, order?: boolean): any {
    console.log(array);
    console.log(param);
    switch (param) {
      case  'price':
        array.sort((a, b) => a.price < b.price);
        break;
      case 'quantity':
        array.sort((a, b) => a.quantity < b.quantity);
        break;
      case  'name':
        array.sort((a, b) => a.name.toLowerCase() < b.name.toLowerCase());
    }
    if (!order) {
      array.reverse();
    }
    return array;
  }

}
