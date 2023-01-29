import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodcart';
  // loggedIn!: true;

  constructor ( private router: Router) {}


  tofav() {
    this.router.navigate(['./cardlist']);
  }


  // favourite popup

  tofavo() {
    const notNull = document.getElementById('favmodal');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
  }

  onclosemodal() {
    const notNull = document.getElementById('favmodal');
    if (notNull != null) {
      notNull.style.display = 'none';
    }

  }

  // logout popup

  closelogout() {
    const notNull = document.getElementById('logoutmodal');
    if (notNull != null) {
      notNull.style.display = 'none';
    }

  }

  onLogout() {
    // localStorage.removeItem('loginObj');
    // localStorage.clear();
    // this.loggedIn = false;
    this.router.navigate(['./login']);

  }

  toprof() {
    this.router.navigate(['./profile']);
  }

  logout() {
    const notNull = document.getElementById('logoutmodal');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
  }



  tohome() {
    this.router.navigate(['./homescreen'])
  }

  toadd() {
    this.router.navigate(['./addrecipe']);
  }
}



