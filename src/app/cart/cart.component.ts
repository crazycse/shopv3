import { Component, OnInit,ViewChild } from '@angular/core';
import { CartService } from '../cart.service';
import { MatTable } from '@angular/material/table';
import { ItemService } from '../item.service'
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shopItem: any;
  empty:boolean;
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
  constructor(private cartservice: CartService , private itemService:ItemService) { }

  ngOnInit(): void {
    this.shopItem = this.cartservice.getShopItems()
    if (this.shopItem.length==0){
      this.empty=true;
    }
    else{
      this.empty=false;
    }
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
    this.itemService.items
    for(var item of this.itemService.items){
      if (item.Name==this.shopItem[id].Name){
        item.Total_kg+=this.shopItem[id].Total_kg;
        item.Total_price+=this.shopItem[id].Total_price;
      }
    }
    this.shopItem.splice(id, 1);
    this.table.renderRows();
    // this.cartservice.shopedLength-=1
    this.cartservice.sl.next(this.cartservice.shopedLength-=1)

  }
}
