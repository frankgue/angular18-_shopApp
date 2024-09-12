import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ModalProductViewComponent } from '../modal-product-view/modal-product-view.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { LoadingComponent } from '../loading/loading.component';
import { HomeSliderComponent } from '../home-slider/home-slider.component';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';
import { ResultRequest } from '../../models/result-request';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProductListComponent,
    ModalProductViewComponent,
    SignupComponent,
    SigninComponent,
    LoadingComponent,
    HomeSliderComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit, OnDestroy {
  products: Product[] = [];
  productSub: Subscription | undefined;
  isLoading: boolean = true;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.productSub = this.productService.getProducts().subscribe({
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
  }

  ngOnDestroy(): void {
    this.productSub?.unsubscribe();
  }
}
