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

@Component({
  selector: 'app-products-container',
  standalone: true,
  imports: [PageTitleComponent, CommonModule, ProductItemComponent],
  templateUrl: './products-container.component.html',
  styleUrl: './products-container.component.css',
})
export class ProductsContainerComponent implements OnInit, OnDestroy {
  categories: ResultRequest<Category> | undefined;
  categorySubscriber: Subscription | undefined;
  productSubscriber: Subscription | undefined;
  products: Product[] | undefined;

  constructor(
    private categoriesService: CategoriesService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.categorySubscriber = this.categoriesService.getCategories().subscribe({
      next: (value: ResultRequest<Category>) => {
        this.categories = value;
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
    event.preventDefault();
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

  ngOnDestroy(): void {
    this.categorySubscriber?.unsubscribe();
    this.productSubscriber?.unsubscribe();
  }
}
