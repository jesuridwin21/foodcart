import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';
import { AuthGuard } from './guards/auth.guard';
import { LoggedinUserGuard } from './guards/loggedin-user.guard';


const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', canActivate: [LoggedinUserGuard], loadChildren: () => import('./login/login.module').then(result => result.LoginModule) },
  {
    path: 'app', component: ShellComponent, children: [
      { path: 'homescreen', canActivate: [AuthGuard], loadChildren: () => import('./homescreen/home.module').then(result => result.HomeModule) },
      { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('./profile/profile.module').then(result => result.ProfileModule) },
      { path: 'cardlist', canActivate: [AuthGuard], loadChildren: () => import('./cardlist/cardlist.module').then(result => result.CardListModule) },
      { path: 'addrecipe', canActivate: [AuthGuard], loadChildren: () => import('./addrecipe/addreceipe.module').then(result => result.AddReceipeModule) },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
