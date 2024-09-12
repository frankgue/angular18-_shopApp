import { Component, OnDestroy, OnInit } from '@angular/core';
import { PageTitleComponent } from '../page-title/page-title.component';
import { CategoriesService } from '../../services/categories.service';
import { Subscription } from 'rxjs';
import { Category } from '../../models/category';
import { CommonModule } from '@angular/common';
import { ResultRequest } from '../../models/result-request';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ModalProductViewComponent } from '../modal-product-view/modal-product-view.component';
import { ProductListComponent } from '../product-list/product-list.component';

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [
    PageTitleComponent,
    CommonModule,
    ProductItemComponent,
    ModalProductViewComponent,
    ProductListComponent,
  ],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css',
})
export class ProductsContainerComponent implements OnInit, OnDestroy {
  categories: ResultRequest<Category> | undefined;
  currentCategory: Category | undefined;
  categorySubscriber: Subscription | undefined;
  productSubscriber: Subscription | undefined;
  products: Product[] = [];
  isDisplayModal: boolean = false;
  isLoading: boolean = false;
  modalProduct: Product | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categorySubscriber = this.categoriesService.getCategories().subscribe({
      next: (value: ResultRequest<Category>) => {
        if (value.isSuccess) {
          this.categories = value;
          this.handleClick(null, this.categories.results[0]);
        }
        // console.log(categories);
      },
      error: (error) => {
        console.log('Error => ', error);
      },
      complete: () => {
        console.log('Completed...');
      },
    });
  }

  handleClick(event: any, category: Category) {
    window.scrollTo(0, 0);
    if (event) {
      event.preventDefault();
    }
    this.currentCategory = category;
    this.isDisplayModal = false;
    this.productSubscriber = this.productService.getProducts().subscribe({
      next: (resultData: ResultRequest<Product>) => {
        if (resultData.isSuccess) {
          let products = resultData.results;
          this.products = products.filter((product: Product) => {
            for (let index = 0; index < product.categories.length; index++) {
              if (product.categories[index].slug === category.slug) {
                return true;
              }
            }
            return false;
            // for(let index =0; index < product.categories.length; index++){
            //   // let slug = product.categories[index].slug;
            //   let name = product.categories[index].name;
            //   // if(slug === category.slug )
            //   if(name === category.name ){
            //     return true
            //   }
            // }
            // return false;
          });
          // this.products = products;
          this.isLoading = false;
        }
      },
      error: (err: any) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed.');
      },
    });
    // console.log(category);
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
    this.categorySubscriber?.unsubscribe();
    this.productSubscriber?.unsubscribe();
  }
}
