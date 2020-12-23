import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { CartService } from '../cart.service';
import { selectedModel } from '../../Model/model'
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products = this.itemservice.items;
  constructor(private itemservice: ItemService, private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart(data: selectedModel) {
    this.cartService.addToCart(data.id, data.dataSelected);
  }
}
