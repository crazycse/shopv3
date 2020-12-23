import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shopItem: any;
  displayedColumns = [
    "Category",
    "Name",
    "image",
    "Exp_date",
    "Total_kg",
    "Price_kg",
    "Total_price",
  ];
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.shopItem = this.cartservice.getShopItems()
  }

  getTotalCost() {
    let sum: number = this.shopItem.map(a => a.Total_price).reduce(function (a, b) {
      return a + b;
    });
    console.log(sum)
    return sum
  }
}
