import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product | undefined;

  @Output() deleteProductItem: EventEmitter<Product> =
    new EventEmitter<Product>();

  @Output() displayProductViewModal: EventEmitter<Product> =
    new EventEmitter<Product>();

  constructor() {}

  ngOnInit(): void {}

  handleClickProduct(product: Product | undefined) {
    this.displayProductViewModal.emit(product);
  }

  // deleteProduct(product: Product | undefined) {
  //   // this.deleteProductItem.emit(product);
  // }
}
