import { Component, OnInit,ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { MatTable } from '@angular/material/table';
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
    "Remove"
  ];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor(private cartservice: CartService) { }

  ngOnInit(): void {
    this.shopItem = this.cartservice.getShopItems()
  }

  getTotalCost() {
    if (this.shopItem.length==0){
      return 0
    }
    let sum: number = this.shopItem.map(a => a.Total_price).reduce(function (a, b) {
      return a + b;
    });
    return sum
  }
  remove(id: any) {
    this.shopItem.splice(id, 1);
    this.table.renderRows();
  }
}
