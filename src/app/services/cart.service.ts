import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product, cartproducts } from "../types/products";

@Injectable({ providedIn: 'root' })

export class Cartservice {

    // private cartupdates = new Subject<string>();
    // public cartupdates$ = this.cartupdates.asObservable();
    // public cartitems: cartproducts[] = [];
    // public get count(): number {
    //     return this.cartitems.reduce((c, t1) => t1.qty + c, 0);
    // };

    cartItems: any[] = []

    constructor() { }


    addItemToCart(receipe: any) {
        this.cartItems.push(receipe)
        localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
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
}