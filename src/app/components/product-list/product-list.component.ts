import { Component, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { ModalProductViewComponent } from '../modal-product-view/modal-product-view.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItemComponent, CommonModule, ModalProductViewComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isDisplayModal: boolean = false;
  modalProduct: Product | undefined;

  constructor() {}

  ngOnInit(): void {
    this.products = [
      {
        _id: '1255452',
        name: 'Robe a imprimé floral a noeud decoupe floral a noeud decoupe ',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_1/1.webp',
          '/assets/images/products/robe_1/2.webp',
          '/assets/images/products/robe_1/3.webp',
          '/assets/images/products/robe_1/4.webp',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '1265452',
        name: 'Robe portefeuille a volants fleuri',
        description: 'Robe portefeuille a volants fleuri',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_2/1.jpg',
          '/assets/images/products/robe_2/2.jpg',
          '/assets/images/products/robe_2/3.jpg',
          '/assets/images/products/robe_2/4.jpg',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12575452',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_3/1.jpg',
          '/assets/images/products/robe_3/2.jpg',
          '/assets/images/products/robe_3/3.jpg',
          '/assets/images/products/robe_3/4.jpg',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12585452',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_4/1.webp',
          '/assets/images/products/robe_4/2.webp',
          '/assets/images/products/robe_4/3.webp',
          '/assets/images/products/robe_4/4.webp',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12559452',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_5/1.jpg',
          '/assets/images/products/robe_5/2.jpg',
          '/assets/images/products/robe_5/3.jpg',
          '/assets/images/products/robe_5/4.jpg',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12551452',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_6/1.webp',
          '/assets/images/products/robe_6/2.webp',
          '/assets/images/products/robe_6/3.webp',
          '/assets/images/products/robe_6/4.webp',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12554252',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_7/1.jpg',
          '/assets/images/products/robe_7/2.jpg',
          '/assets/images/products/robe_7/3.jpg',
          '/assets/images/products/robe_7/4.jpg',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12554352',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_8/1.jpg',
          '/assets/images/products/robe_8/2.jpg',
          '/assets/images/products/robe_8/3.jpg',
          '/assets/images/products/robe_8/4.jpg',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12554542',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_9/1.webp',
          '/assets/images/products/robe_9/2.webp',
          '/assets/images/products/robe_9/3.webp',
          '/assets/images/products/robe_9/4.webp',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12554552',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_10/1.jpg',
          '/assets/images/products/robe_10/2.jpg',
          '/assets/images/products/robe_10/3.jpg',
          '/assets/images/products/robe_10/4.jpg',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12554562',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_11/1.webp',
          '/assets/images/products/robe_11/2.webp',
          '/assets/images/products/robe_11/3.webp',
          '/assets/images/products/robe_11/4.webp',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
      {
        _id: '12554527',
        name: 'Robe a imprimé floral a noeud decoupe',
        description: 'Robe a imprimé floral a noeud decoupe',
        category: ['Robes', 'Femmes'],
        imageUrl: [
          '/assets/images/products/robe_12/1.webp',
          '/assets/images/products/robe_12/2.webp',
          '/assets/images/products/robe_12/3.webp',
          '/assets/images/products/robe_12/4.webp',
        ],
        sold_price: 1599,
        regular_price: 2599,
        created_at: new Date(),
      },
    ];
  }

  handleDeleteProduct(product: Product) {
    console.log('handleDeleteProduct =>  ', product);
    // this.products = this.products.filter((prod) => prod._id !== product._id);
  }

  handleDisplayProductViewModal(product: Product) {
    if (product) {
      this.isDisplayModal = true;
      this.modalProduct = product;
    }
  }

  handleCloseModal() {
    this.isDisplayModal = false;
    this.modalProduct = undefined;
  }
}
