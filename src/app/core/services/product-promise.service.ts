import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../shared/product.model';

@Injectable()
export class ProductPromiseService {
    private productsUrl = 'http://localhost:3000/products';

    constructor(
        private http: HttpClient
    ) {}

    getProducts(): Promise<Product[]> {
        return this.http
            .get(this.productsUrl)
            .toPromise()
            .then(response => <Product[]>response)
            .catch(this.handleError);
    }

    getProduct(id: number): Promise<Product> {
        const productUrl = `${this.productsUrl}/${id}`;

        return this.http.get(productUrl)
            .toPromise()
            .then(response => <Product>response)
            .catch(this.handleError);
    }

    updateListProduct(product: Product): Promise<Product[]> {
        const url = `${this.productsUrl}/${product.id}`;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({'Content-type': 'application/json'})
        };
        return this.http.put(url, body, options)
                .toPromise()
                .then(response => <Product>response)
                .catch(this.handleError);
    }

    addProduct (product: Product): Promise<Product[]> {
        const url = this.productsUrl;
        const body = JSON.stringify(product);
        const options = {
            headers: new HttpHeaders({'Content-type': 'application/json'})
        };
        return this.http.post(url, body, options)
                .toPromise()
                .then(response => <Product>response)
                .catch(this.handleError);
    }

    deleteProduct(product: Product): Promise<Product> {
        const url = `${this.productsUrl}/${product.id}`;
         return this.http.delete(url)
                    .toPromise()
                    .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.log('Ups... Error:', error);
        return Promise.reject(error.message || error);
    }
}
