declare const bootstrap: any;

import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { homescreen } from '../addrecipe/modal/home.modal';
import { Cartservice } from '../services/cart.service';
import { RecipeService } from '../services/recipe.service';
import { Product } from '../types/products';
// import { cartservice } from '../services/cart.service';
@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.css']
})
export class HomescreenComponent implements OnInit {
  data: any;
  allReceipes: any[] = [];
  cardSearch = '';
  priceOrder = 'lowToHigh'

  @ViewChild('toast', { static: true }) toast: any;
  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService, private cartservice: Cartservice) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.allReceipes = this.recipeService.getAllReceipes()


  }

  goTocart(receipe: any) {
    this.cartservice.addItemToCart(receipe);
    // const toast = new bootstrap.Toast(this.toast.nativeElement)
    // toast.show()
  }
  onFilter() {
    const notNull = document.getElementById('filtermodal');
    if (notNull != null) {
      notNull.style.display = 'block';
    }
  }

  deleteCard(receipe: any) {
    this.recipeService.deleteReceipe(receipe)
    this.allReceipes = this.recipeService.getAllReceipes()
  }

  addToFavorite(receipe: any) {
    this.recipeService.addToFavorite(receipe);
    this.allReceipes = this.recipeService.getAllReceipes();
  }
  switchHighToLow(event: any) {
    this.priceOrder = 'highToLow'
  }

  switchLowToHigh(event: any) {
    this.priceOrder = 'lowToHigh'
  }

  sortReceipes() {
    if (this.priceOrder === 'highToLow') {

    }
    const notNull = document.getElementById('filtermodal');
    if (notNull != null) {
      notNull.style.display = 'none';
    }
  }
}
