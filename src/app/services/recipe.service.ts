import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Subject, throwError } from 'rxjs';
import { Receipe } from '../types/receipe';
import { HttpErrorResponse } from '@angular/common/http'

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
    const favorite = this.getFavoriteReceipes()
    this.favoriteReceipe$.next(favorite)
  }

  addToFavorite(favoriteReceipe: any) {
    this.recipes = this.recipes.map(receipe => {
      if (receipe.recipename === favoriteReceipe.recipename) {
        receipe.favoriteReceipe = !receipe.favoriteReceipe;
        return receipe;
      } else {
        return receipe.pipe(
          catchError(this.handleError)
        );
      }
    })
    localStorage.setItem('newrecipe', JSON.stringify(this.recipes));
    const favorite = this.getFavoriteReceipes()
    this.favoriteReceipe$.next(favorite)
  }

  clearAll() {
    this.recipes = []
    this.favoriteReceipe$.next([])
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}


