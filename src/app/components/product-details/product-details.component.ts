import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ProductDescriptionComponent } from '../poduct-tabs/product-description/product-description.component';
import { ProductAdditionalInfoComponent } from '../poduct-tabs/product-additional-info/product-additional-info.component';
import { ProductReviewsComponent } from '../poduct-tabs/product-reviews/product-reviews.component';
import { ProductVendorComponent } from '../poduct-tabs/product-vendor/product-vendor.component';
import { RouterModule } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ProductDescriptionComponent,
    ProductAdditionalInfoComponent,
    ProductReviewsComponent,
    ProductVendorComponent,
  ],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: Product | undefined;

  constructor() {}

  ngOnInit(): void {}

  handleChangeDetails(component: any) {
    component.product = this.product;
    console.log({ params: this.product });
  }
}
