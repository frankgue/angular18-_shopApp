import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductItemComponent } from '../product-item/product-item.component';
import { CommonModule, JsonPipe, NgFor } from '@angular/common';
import { Product } from '../../models/product';
import { ModalProductViewComponent } from '../modal-product-view/modal-product-view.component';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from '../loading/loading.component';
import { ResultRequest } from '../../models/result-request';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [
    ProductItemComponent,
    CommonModule,
    ModalProductViewComponent,
    HttpClientModule,
    LoadingComponent,
  ],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  resultData: ResultRequest<Product> | undefined;
  isDisplayModal: boolean = false;
  isLoading: boolean = true;
  modalProduct: Product | undefined;
  productSub: Subscription | undefined;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (resultData: ResultRequest<Product>) => {
        if (resultData.isSuccess) {
          this.products = resultData.results;
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        console.log('Error => ', err);
        this.isLoading = true;
      },
      complete: () => {
        console.log('Completed');
      },
    });

    // this.productService
    //   .getProducts()
    //   .then((productList: Product[]) => {
    //     this.products = productList;
    //   })
    //   .catch(() => {
    //     this.products = [];
    //   });
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

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
