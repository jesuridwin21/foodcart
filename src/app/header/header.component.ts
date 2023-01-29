import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  data: any;
  loggedIn = true;

  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['data']) {
        this.data = JSON.parse(params['data']);
      }
    })
  }

  onLogout() {
    // localStorage.removeItem('loginObj');
    // localStorage.clear();
    this.loggedIn = false;
    this.router.navigate(['./login']);

  }



  // goto(Home: any) {

  // }

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
