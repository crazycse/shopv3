import { Injectable } from '@angular/core';
import { ItemService } from './item.service'
import {BehaviorSubject, Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  shoped_items = [];
  shopedLength:number=0;
  data: any;
  temp:boolean;
  public sl: BehaviorSubject<number>;
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
        this.shopedLength=this.shoped_items.length;
        this.sl.next(this.shoped_length)
      }
      
      //Changing original Owner data
      product.Total_kg -= this.data.Total_kg;
      product.Total_price -= this.data.Total_price;

    }
    else{
      this._snackBar.open('Order should be less than Available!!', 'Close', {
        duration: 5000,
        horizontalPosition: "right",
        verticalPosition: "top",
      });
    }
  }


  getShopItems(){
    return this.shoped_items
  }
  getShopLength():Observable<number>{
    return this.sl.asObservable();
  }

  constructor(private itemService: ItemService,private _snackBar: MatSnackBar) { 
    this.sl = new BehaviorSubject<number>(this.shoped_length);
    console.log(this.sl)
  }
}
