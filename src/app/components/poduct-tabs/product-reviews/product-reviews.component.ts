import { Component, OnInit } from '@angular/core';
import { Product } from '../../../models/product';

@Component({
  selector: 'app-product-reviews',
  standalone: true,
  imports: [],
  templateUrl: './product-reviews.component.html',
  styleUrl: './product-reviews.component.css',
})
export class ProductReviewsComponent implements OnInit {
  product: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    console.log("ProductReviewsComponent");
    console.log(this.product);
  }
}
