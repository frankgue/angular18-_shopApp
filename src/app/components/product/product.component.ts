import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { LoadingComponent } from '../loading/loading.component';
import { PaymentCardComponent } from '../payment-card/payment-card.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ResultRequest } from '../../models/result-request';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    CommonModule,
    LoadingComponent,
    PaymentCardComponent,
    ProductDetailsComponent,
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: Product | undefined;
  resultData: ResultRequest<Product>|undefined
  slug: string | undefined;
  productSubScriber: Subscription | undefined;
  isLoading: boolean = true;
  currentImg: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.slug = this.route.snapshot.params['slug'];
    this.productSubScriber = this.productService.getProducts().subscribe({
      next: (resultData: ResultRequest<Product>) => {
        if (resultData.isSuccess) {
          
          this.product = resultData.results.filter((p) => p.slug === this.slug)[0];
          this.currentImg = this.product?.imageUrl[0];
        }
        this.isLoading = false;
      },
      error: (err: any) => {
        console.log('Error => ', err);
        this.isLoading = false;
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }

  closeModal() {
    // this.close.emit();
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.productSubScriber?.unsubscribe();
  }

  setCurrentImg(url: string) {
    this.currentImg = url;
  }
}
