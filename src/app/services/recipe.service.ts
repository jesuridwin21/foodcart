import { Injectable } from '@angular/core';
import { Receipe } from '../types/receipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipes: Receipe[] = []
  constructor() {
    this.getAllReceipes();
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

  deleteReceipe(deleteReceipe: any) {
    this.recipes = this.recipes.filter(receipe => receipe.recipename !== deleteReceipe.recipename)
    localStorage.setItem('newrecipe', JSON.stringify(this.recipes));
  }
}
