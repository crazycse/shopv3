import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddItemComponent } from './add-item/add-item.component';
import { ShopComponent } from './shop/shop.component';
import { ViewItemComponent } from './view-item/view-item.component';
import { CartComponent } from './cart/cart.component'
const routes: Routes =     [
  { path: 'view', component: ViewItemComponent },
  { path: 'add/:itemId', component: AddItemComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'cart',component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
