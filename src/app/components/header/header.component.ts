import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { AsideNavComponent } from '../aside-nav/aside-nav.component';
import { auth_items, nav_items } from '../../api/nav';
import { Item } from '../../models/item';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, AsideNavComponent, AsideNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit, OnDestroy {
  data: Number | undefined;
  second: Number | undefined;
  secondSubscriber: Subscription | undefined;
  appName: string = environment.siteName;
  nav_data: Item[] = nav_items;
  auth_data: Item[] = auth_items;
  isDisplayMobileMenu: boolean = false;

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

  handleDisplayMobileNav() {
    this.isDisplayMobileMenu = !this.isDisplayMobileMenu;
  }
  handleCloseMobileNav() {
    this.isDisplayMobileMenu = false;
  }

  ngOnDestroy(): void {
    this.secondSubscriber?.unsubscribe();
  }
}
