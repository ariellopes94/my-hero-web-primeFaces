import { Router } from '@angular/router';
import { AuthService } from './../app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {


    constructor(private authenticationService:  AuthService,
                 private router: Router ) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
             
                console.log("Error detectado pelo Interceptor")
                console.log("=======================================================")

                
                err.Message
                console.log("=======================================================")
                // auto logout if 401 response returned from api
               // this.authenticationService.logout();
               // location.reload(true);
               
            }

            if (err.status === 403) {
                this.authenticationService.logout();
                this.router.navigate(['']);
            }
            
            //console.log("ERROROBJ " + err.error.timestamp)
            const error = err.error || err.statusText;
            //JSON.parse(error)
            //
            return throwError(JSON.parse(error));
        }))
    }

   
 
}
            
