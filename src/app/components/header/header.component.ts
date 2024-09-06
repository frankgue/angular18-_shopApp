import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  data: Number | undefined;
  second: Number | undefined;
  secondSubscriber: Subscription | undefined;
  appName: string = environment.siteName;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // this.productService.getNumber().subscribe((value) => {
    //   this.data = value;
    // });
    // this.secondSubscriber = this.productService.getSecond().subscribe({
    //   next: (value: Number) => {
    //     this.second = value;
    //   },
    //   error: (error: any) => {
    //     console.log('Error => ', error);
    //   },
    //   complete: () => {
    //     console.log('Completed');
    //   },
    // });
  }

  ngOnDestroy(): void {
    this.secondSubscriber?.unsubscribe();
  }
}
