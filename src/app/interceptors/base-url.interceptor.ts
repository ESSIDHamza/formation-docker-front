import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs';


@Injectable()
export class BaseUrlInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const baseUrlRequest: HttpRequest<any> = req.clone({ url: `${environment.baseUrl}${req.url}` });
        return next.handle(baseUrlRequest);
    }

}
