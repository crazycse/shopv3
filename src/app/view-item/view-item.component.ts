import { Component, OnInit ,ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';
import { ItemService} from '../item.service'
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
  constructor(private myService: ItemService) { }

  ngOnInit(): void {
    this.data=this.myService.items
  }
  remove(id: any) {
    this.data.splice(id, 1);
    this.table.renderRows();
  }

}
