import { AuthService } from './../app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


    constructor(private authenticationService:  AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                alert("ERROR INERCEPET SENHA OU EMAIL INCORRETO" );
                console.log("Error detectado pelo Interceptor")
                // auto logout if 401 response returned from api
               // this.authenticationService.logout();
               // location.reload(true);
               
            }

            console.log("ERROR" + err.error);
            console.log("erar para aparecer mensagem" + err.error.message);

            let errorObj = err;
            console.log("ERROROBJ " + err.error.timestamp)
            const error = err.error || err.statusText;

            //
            return throwError(error);
        }))
    }

   
 
}
            
