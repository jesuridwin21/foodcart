import { ErrorHandler, Injectable, Injector} from '@angular/core';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';
import { GlobalErrorService } from './global-error.service';

@Injectable()
export class GlobalErrorService implements ErrorHandler{

    constructor (private globalErrorService: GlobalErrorService, private injector: Injector) {}
    handleError(error: HttpErrorResponse){
        // throw new Error('Method not implemented.')
        let router = this.injector.get(Router);
        alert(error);
        
    }
}
