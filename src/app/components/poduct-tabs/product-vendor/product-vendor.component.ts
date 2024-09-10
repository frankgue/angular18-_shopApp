import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-vendor',
  standalone: true,
  imports: [],
  templateUrl: './product-vendor.component.html',
  styleUrl: './product-vendor.component.css',
})
export class ProductVendorComponent implements OnInit {
  product: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log('ProductVendorComponent');
    console.log(this.product);
  }
}
