import { Component, OnInit } from '@angular/core';
import { items } from '../item';
@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  data:any;
  constructor() { }

  ngOnInit(): void {
    this.data=items;
  }
  // updateList(id: number, property: string, event: any) {
  //   let editField = event.target.textContent;
  //   this.data[id][property] = editField;
  //   console.log(this.data)
  // }
  remove(id: any) {
    this.data.splice(id, 1);
  }

}
