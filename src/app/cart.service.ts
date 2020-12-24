import { Injectable } from '@angular/core';
import { ItemService } from './item.service'
import { Observable } from 'rxjs'
@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoped_items = [];
  data: any;
  temp:boolean;
  get shoped_length(){
    return this.shoped_items.length
  }
  addToCart(kg:number, product) {
    this.data = Object.assign({}, product);
    this.data.Total_price = this.data.Price_kg * kg;
    this.data.Total_kg = Number(kg);
    if (product.Total_kg >= this.data.Total_kg) {

      //update customer data
      this.temp=true;
      for(var item of this.shoped_items){
        if(item.Name===this.data.Name){
          item.Total_kg+=this.data.Total_kg;
          item.Total_price+=this.data.Total_price;
          this.temp=false;
          break
        }
      }
      if (this.temp){
        this.shoped_items.push(this.data);
      }
      
      //Changing original Owner data
      product.Total_kg -= this.data.Total_kg;
      product.Total_price -= this.data.Total_price;

    }
    else{
      window.alert("Order should be less than Available")
    }
  }


  getShopItems(){
    return this.shoped_items
  }



  constructor(private itemService: ItemService) { }
}
