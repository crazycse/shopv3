import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  items:any;
  constructor(private http: HttpClient) { 
    console.log("Service Constructor")
  }
  getJson() {
    return this.http.get('../assets/data.json');
  }
  startService(){
    this.getJson().subscribe(res => this.items = res);
    console.log("Start Service")
  }
  addItem(data:any){
    console.log(this.items)
    this.items.push(data)
  }

  getItem(){
    return this.items
  }
}
