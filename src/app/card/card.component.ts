import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from '../cart.service';
import { selectedModel } from '../../Model/model'
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() product: any;
  @Input() id: number;
  @Output() selectedItem = new EventEmitter<selectedModel>();

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    console.log(this.id)
  }
  addToCart(kg: number, data: any) {
    this.selectedItem.emit({ id: kg, dataSelected: data })
  }

}
