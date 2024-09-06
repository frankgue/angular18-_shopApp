import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, LoadingComponent],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent implements OnInit, OnDestroy {
  @Input() product: Product | undefined;
  slug: string | undefined;
  productSubScriber: Subscription | undefined;
  isLoading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.slug = this.route.snapshot.params['slug'];
    this.productSubScriber = this.productService.getProducts().subscribe({
      next: (products: Product[]) => {
        this.product = products.filter((p) => p.slug === this.slug)[0];
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
}
