import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { CardSearchPipe } from './pipes/card-search.pipe';
import { TotalAmountPipe } from './pipes/total-amount.pipe';
import { ShellComponent } from './shell/shell.component';
import { SortReceipePipe } from './pipes/sort-receipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomescreenComponent,
    HeaderComponent,
    ProfileComponent,
    AddrecipeComponent,
    CardlistComponent,
    CardSearchPipe,
    TotalAmountPipe,
    ShellComponent,
    SortReceipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    // AngularFontAwesomeModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
