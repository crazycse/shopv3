import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {  none_image} from '../item';
import { ItemService } from '../item.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  item_form: FormGroup;
  data: any;
  id: any;
  save = true;
  constructor(
    private rout: Router,
    private route: ActivatedRoute,
    private myservice:ItemService) { }
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = +params.get('itemId')
      if (isNaN(this.id)) {
        this.data = {
          Category: null,
          Name: null,
          Total_kg: null,
          Price_kg: null,
          Total_price: null,
          Exp_date: null,
          image:null
        }
      }
      else {
        this.data = this.myservice.items[this.id];
      }
    });
    this.item_form = new FormGroup({
      Category: new FormControl(this.data.Category, Validators.required),
      Name: new FormControl(this.data.Name, Validators.required),
      Total_kg: new FormControl(this.data.Total_kg, Validators.required),
      Price_kg: new FormControl(this.data.Price_kg, Validators.required),
      Exp_date: new FormControl(this.data.Exp_date, Validators.required),
      image : new FormControl(this.data.image )
    })
  }
  get Category() { return this.item_form.get('Category'); }
  get Name() { return this.item_form.get('Name'); }
  get Total_kg() { return this.item_form.get('Total_kg'); }
  get Price_kg() { return this.item_form.get('Price_kg'); }
  get Exp_date() { return this.item_form.get('Exp_date'); }
  get image() { return this.item_form.get('image')}
  upload(event){
    const file = (event.target as HTMLInputElement).files[0];
    
    this.item_form.get('image').updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () => {
      this.item_form.patchValue({
      image: reader.result 
    });      
    }
    reader.readAsDataURL(file)
  }
  Onsubmit() {
    this.data = this.item_form.value;
    if (this.item_form.valid==false) {
      console.log("Not Work");
      this.save = false;
      return
    }
    else {
      this.save = true;
    }
    this.data.Total_price = this.data.Total_kg * this.data.Price_kg;
    if (this.data.image==null){
      this.data.image = none_image;

    }

    
    if (isNaN(this.id)){
      this.myservice.addItem(this.data); 
    } 
    else{
      this.myservice.items.splice(this.id, 1, this.data);
    }
    this.rout.navigate(['/view']);
  }


}
