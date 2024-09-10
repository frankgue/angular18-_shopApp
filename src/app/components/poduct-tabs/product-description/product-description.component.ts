import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-description',
  standalone: true,
  imports: [],
  templateUrl: './product-description.component.html',
  styleUrl: './product-description.component.css',
})
export class ProductDescriptionComponent implements OnInit {
  product: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log("ProductDescriptionComponent");
    console.log(this.product);
  }
}
