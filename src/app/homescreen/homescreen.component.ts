import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { homescreen } from '../addrecipe/modal/home.modal';
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

  constructor(private route: ActivatedRoute, private router: Router, private recipeService: RecipeService) { }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    this.allReceipes = this.recipeService.getAllReceipes()
  }

  goTocart() {
    this.router.navigate(['./cardlist']);
    // this.cartService.add(product);

  }

  // filter popup



  onFilter() {
    // const notNull = document.getElementById('filtermodal');
    // if (notNull != null) {
    //   notNull.style.display = 'block';
    // }

  }

}
