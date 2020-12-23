import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:any;
  constructor(private http: HttpClient) { 
    this.getJson().subscribe(res => this.items = res);
  }
  getJson() {
    return this.http.get('../assets/data.json');
  }
  addItem(data:any){
    console.log(this.items)
    this.items.push(data)
  }
  getItem(){
    return this.items
  }
}
