import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()

export class TimingInterceptor implements HttpInterceptor {

    intercept (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const startTime = Date.now();
        const cloneRequest = req.clone();
        return next.handle(cloneRequest)
                .pipe(
                    tap(event => {
                            if (event instanceof HttpResponse) {
                            const endTime = Date.now();
                            console.log(`Request duration: ${endTime - startTime}ms`);
                        }
                    })
                );
    }
}
