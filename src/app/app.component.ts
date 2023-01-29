import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cartservice } from './services/cart.service';
import { RecipeService } from './services/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'foodcart';
  // loggedIn!: true;
  favoriteReceipesCount = 0
  favoriteReceipes: any[] = [];


  constructor(private router: Router, private recipeService: RecipeService, private cartservice: Cartservice) { }


  ngOnInit() {
    this.recipeService.favoriteReceipe$.subscribe(favoriteReceipes => {
      if (favoriteReceipes) {
        this.favoriteReceipesCount = favoriteReceipes.length;
      } else {
        this.favoriteReceipesCount = 0
      }
    })
  }

  tofav() {
    this.router.navigate(['./cardlist']);
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

  goTocart(receipe: any) {
    this.cartservice.addItemToCart(receipe);
  }
}



