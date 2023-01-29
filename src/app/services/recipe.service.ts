import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Receipe } from '../types/receipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Receipe[] = []
  favoriteReceipe$ = new BehaviorSubject<any[]>([])
  constructor() {
    this.getAllReceipes();
    const favorite = this.getFavoriteReceipes()
    this.favoriteReceipe$.next(favorite)
  }

  addNewReceipes(receipe: any) {
    this.recipes.push(receipe)
    localStorage.setItem('newrecipe', JSON.stringify(this.recipes));
  }

  getAllReceipes() {
    const receipeString = localStorage.getItem('newrecipe');
    if (receipeString) {
      this.recipes = JSON.parse(receipeString);
      return this.recipes;
    } else {
      return []
    }
  }

  getFavoriteReceipes() {
    this.recipes = this.getAllReceipes();
    return this.recipes.filter(receipe => receipe.favoriteReceipe)
  }

  deleteReceipe(deleteReceipe: any) {
    this.recipes = this.recipes.filter(receipe => receipe.recipename !== deleteReceipe.recipename)
    localStorage.setItem('newrecipe', JSON.stringify(this.recipes));
  }

  addToFavorite(favoriteReceipe: any) {
    this.recipes = this.recipes.map(receipe => {
      if (receipe.recipename === favoriteReceipe.recipename) {
        receipe.favoriteReceipe = !receipe.favoriteReceipe;
        return receipe;
      } else {
        return receipe;
      }
    })
    localStorage.setItem('newrecipe', JSON.stringify(this.recipes));
    const favorite = this.getFavoriteReceipes()
    this.favoriteReceipe$.next(favorite)
  }
}
