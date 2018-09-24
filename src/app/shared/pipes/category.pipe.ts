import { Pipe, PipeTransform } from '@angular/core';
import { ProductCategory } from '../product.model';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: number, args?: any): any {

    switch (value) {
      case ProductCategory.book:
        return 'Book';
      case ProductCategory.pen:
        return 'Pen';
      case ProductCategory.pencil:
        return 'Pencil';
    }
    // return null;
  }

}
