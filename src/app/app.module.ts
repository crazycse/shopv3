import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddItemComponent } from './add-item/add-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewItemComponent } from './view-item/view-item.component';
import { RouterModule } from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AppComponent,
    AddItemComponent,
    ViewItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatNativeDateModule,
    
    MatDatepickerModule,
    RouterModule.forRoot([
      { path: '', component: ViewItemComponent },
      { path: 'add/:itemId', component: AddItemComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
