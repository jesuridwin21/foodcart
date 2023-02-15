import { NgModule } from '@angular/core';
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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgToastModule, SharedModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:customHttpInterceptor,multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
