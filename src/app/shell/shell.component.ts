import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authservice } from '../services/auth.service';
import { Cartservice } from '../services/cart.service';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {



  title = 'foodcart';
  favoriteReceipesCount = 0
  favoriteReceipes: any[] = [];
  userProfile: any = {};


  constructor(private router: Router, private recipeService: RecipeService,
    private cartservice: Cartservice, private authservice: Authservice) { }


  ngOnInit() {
    this.recipeService.favoriteReceipe$.subscribe(favoriteReceipes => {
      if (favoriteReceipes) {
        this.favoriteReceipesCount = favoriteReceipes.length;
      } else {
        this.favoriteReceipesCount = 0
      }
    })

    this.authservice.getCurrentUser();
    this.authservice.userProfile$.subscribe(userProfile => {
      this.userProfile = userProfile;
    })
  }

  tofav() {
    this.router.navigate(['./app/cardlist']);
  }


  // favourite popup

  tofavo() {
    this.favoriteReceipes = this.recipeService.getFavoriteReceipes();
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
    localStorage.removeItem('cartItems');
    localStorage.removeItem('newrecipe');
    localStorage.removeItem('current-user');
    localStorage.removeItem('profile');
    // localStorage.clear();
    this.authservice.clearAll();
    this.cartservice.clearAll();
    this.recipeService.clearAll();
    this.router.navigate(['./login']);

  }

  toprof() {
    this.router.navigate(['./app/profile']);
  }

  logout() {
    const notNull = document.getElementById('logoutmodal');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
  }



  tohome() {
    this.router.navigate(['./app/homescreen'])
  }

  toadd() {
    this.router.navigate(['./app/addrecipe']);
  }

  goTocart(receipe: any) {
    this.cartservice.addItemToCart(receipe);
  }

}
