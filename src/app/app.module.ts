import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewItemComponent } from './view-item/view-item.component';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { ShopComponent } from './shop/shop.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { CardComponent } from './card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { CartComponent } from './cart/cart.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';

//service

import { ItemService} from './item.service';

export function initializeService(appInitService: ItemService) {
  return (): void => { 
    return appInitService.startService();
  }
}

@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ViewItemComponent,
    ShopComponent,
    CardComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatNativeDateModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,    
    MatDatepickerModule,
    MatButtonToggleModule,
    MatBadgeModule,
  ],
  providers: [ItemService,
    {provide: APP_INITIALIZER,useFactory: initializeService, deps: [ItemService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
