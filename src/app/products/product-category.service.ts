import { Injectable } from '@angular/core';
import { ProductCategory } from '../shared/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoryService {

  constructor() { }

  getCategory(category: number): string {
    switch (category) {
      case ProductCategory.book:
        return 'Book';
      case ProductCategory.pen:
        return 'Pen';
      case ProductCategory.pencil:
        return 'Pencil';
    }
  }
}
