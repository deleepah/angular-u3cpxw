import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  constructor(
    private cartservice: CartService,
    private formBuilder: FormBuilder) {
      
    this.items = this.cartservice.getItems();
  }

  ngOnInit() {
  }

}