import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell/shell.component';
import { NgToastModule } from 'ng-angular-popup';
import { SharedModule } from './shared/shared.module';
import { HttpErrorResponse, HTTP_INTERCEPTORS } from '@angular/common/http';
import { customHttpInterceptor } from './services/interceptor/interceptor.service';
// import { StoreModule } from '@ngrx/store';
import { GlobalErrorService } from './shared/error/global-error.service';
import { reducer } from './reducers/tutorial.reducers';
// import { GooglemapsComponent } from './googlemaps/googlemaps.component';
// import { AgmCoreModule } from '@agm/core';
// import { GooglemapsComponent } from './googlemaps/googlemaps.component';
// import { GooglemapsModule } from './googlemaps/googlemaps.module';

class MyErrorHandler implements ErrorHandler {
  handleError(error: HttpErrorResponse ) {
    console.log('globalerror', error)
    alert(error)
    // do something with the exception
  }
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShellComponent,
    // GooglemapsComponent,
    // GooglemapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule,
    SharedModule,
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
    // })
    // StoreModule.forRoot({ 
    //   // tutorial: reducer
    //  }),
    // GooglemapsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: customHttpInterceptor, multi: true },
    {provide: ErrorHandler, useClass: MyErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
