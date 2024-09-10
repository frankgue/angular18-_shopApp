import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-additional-info',
  standalone: true,
  imports: [],
  templateUrl: './product-additional-info.component.html',
  styleUrl: './product-additional-info.component.css',
})
export class ProductAdditionalInfoComponent implements OnInit {
  product: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log("ProductAdditionalInfoComponent");
    
    console.log(this.product);
  }
}
