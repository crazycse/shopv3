import { Component, OnInit ,ViewChild} from '@angular/core';
import { items } from '../item';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-view-item',
  templateUrl: './view-item.component.html',
  styleUrls: ['./view-item.component.css']
})
export class ViewItemComponent implements OnInit {
  data:any;
  imageURL : any;
  tableColumns  :  string[] =['id','Category','Name','Total_kg','Price_kg','Total_price','Exp_date','image','Command'];
  @ViewChild(MatTable,{static:true}) table: MatTable<any>;
  constructor() { }

  ngOnInit(): void {
    this.data=items;
  }
  remove(id: any) {
    this.data.splice(id, 1);
    this.table.renderRows();
  }

}
