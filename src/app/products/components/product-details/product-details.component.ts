import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Product } from '../../../shared/product.model';
import { pipe } from 'rxjs';
// import { ProductsService } from '../../services';
import { ProductPromiseService } from '../../../core/services';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productDetais: Product;

  constructor(
    private route: ActivatedRoute,
    // private productsService: ProductsService,
    private productPromiseService: ProductPromiseService
   ) { }

  ngOnInit() {
    this.route.paramMap.
      pipe(
        switchMap((params: Params) =>
          this.productPromiseService.getProduct(+params.get('productID'))
       )
      )
      .subscribe(product => this.productDetais = product, err => console.log(err));
   }

  onBuy() {
    console.log(`Congratulation! You've bought the ${this.productDetais.name}!!!`);
    // this.buyOneProduct.emit({ product: this.productData, action: 'add'});
  }


}
