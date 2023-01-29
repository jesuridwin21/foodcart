import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { CardlistComponent } from './cardlist/cardlist.component';
import { AddrecipeComponent } from './addrecipe/addrecipe.component';
import { ShellComponent } from './shell/shell.component';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'app', component: ShellComponent, children: [
      { path: 'homescreen', component: HomescreenComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'cardlist', component: CardlistComponent },
      { path: 'addrecipe', component: AddrecipeComponent },
    ]
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
