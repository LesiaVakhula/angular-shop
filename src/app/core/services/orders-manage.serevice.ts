import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../../shared/product.model';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class OrderManageService {
    private ordersUrl = 'http://localhost:3000/orders';

    constructor(
        private http: HttpClient
    ) {}

    getOrders(): Observable<Product[][]> {
        return this.http.get<Product[][]>(this.ordersUrl)
            .pipe(
                tap((elem) => console.log(elem)),
                catchError(this.handleError)
                );
    }

    private handleError(error: any) {
        let errorMessage: string;
        if (error.error instanceof Error) {
            errorMessage = `An error occurred: ${error.error.message}`;
        } else {
            errorMessage = `Backend returned code ${error.status}, body was: ${error.error}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
