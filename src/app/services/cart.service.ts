import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Product, cartproducts } from "../types/products";

@Injectable()

export class cartservice {



    private cartupdates = new Subject<string>();
    public cartupdates$ = this.cartupdates.asObservable();

    public cartitems: cartproducts[] = [];
    public get count(): number{
        return this.cartitems.reduce((c, t1) => t1.qty+c,0);
    };

    constructor() {

    }


    add(product: Product) {
        // let item: cartproducts = this.cartitems.find(item => item.id == product.id)
        // as cartproduct ;

        // if(item) { 
        //     item.qty ++
        // } else {
        //     (product as cartproducts).qty = 1;
        //     this.cartitems.push(product)
        // }

    }

}