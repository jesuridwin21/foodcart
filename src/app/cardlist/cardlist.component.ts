import { Component, OnInit } from '@angular/core';
import { Cartservice } from '../services/cart.service';

@Component({
  selector: 'app-cardlist',
  templateUrl: './cardlist.component.html',
  styleUrls: ['./cardlist.component.css']
})
export class CardlistComponent implements OnInit {
  allCartItems: any[] = [];
  constructor(private cartservice: Cartservice) { }

  ngOnInit(): void {
    this.allCartItems = this.cartservice.getAllCartItems();
  }

  deleteCartItem(index: number) {
    this.cartservice.deleteReceipe(index);
    this.allCartItems = this.cartservice.getAllCartItems();
  }

}
