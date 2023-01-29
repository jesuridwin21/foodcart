import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product, cartproducts } from "../types/products";

@Injectable({ providedIn: 'root' })

export class Cartservice {


    cardItemUpdated$ = new Subject();
    cartItems: any[] = []

    constructor() { }


    addItemToCart(receipe: any) {
        this.cartItems.push(receipe)
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
        this.cardItemUpdated$.next(this.cartItems)
    }

    getAllCartItems() {
        const cartItemString = localStorage.getItem('cartItems');
        if (cartItemString) {
            this.cartItems = JSON.parse(cartItemString);
            return this.cartItems;
        } else {
            return []
        }
    }

    deleteReceipe(index: number) {
        this.cartItems.splice(index, 1);
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }

    clearAll() {
        this.cartItems = [];
        this.cardItemUpdated$.next(this.cartItems)
    }
}