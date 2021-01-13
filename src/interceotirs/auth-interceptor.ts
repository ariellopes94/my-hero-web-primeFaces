import { API_CONFIG } from './../app/config/api.config';
import { StorageService } from './../app/services/storage.service';
import { LocalUser } from './../app/models/DTO/local_user';
import { AuthService } from './../app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {


    constructor(private strogase: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

     let LocalUser = this.strogase.getLocalUser();

     let N = API_CONFIG.baseUrl.length;
     let requestToAPI = request.url.substring(0, N) == API_CONFIG.baseUrl;

     if(LocalUser && requestToAPI){
         const authReq = request.clone({headers: request.headers.set('Authorization', 'Bearer ' + LocalUser.token)});
         return next.handle(authReq);
     }
     else{
       return next.handle(request);
     }  
    }

   
 
}
            
