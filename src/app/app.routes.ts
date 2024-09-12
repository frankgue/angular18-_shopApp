import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProductComponent } from './components/product/product.component';
import { ProductDescriptionComponent } from './components/poduct-tabs/product-description/product-description.component';
import { ProductAdditionalInfoComponent } from './components/poduct-tabs/product-additional-info/product-additional-info.component';
import { ProductVendorComponent } from './components/poduct-tabs/product-vendor/product-vendor.component';
import { ProductReviewsComponent } from './components/poduct-tabs/product-reviews/product-reviews.component';
import { ProductsContainerComponent } from './components/products-container/products-container.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: SigninComponent,
    pathMatch: 'full',
  },
  {
    path: 'products',
    component: ProductsContainerComponent,
    pathMatch: 'full',
  },
  {
    path: 'product/:slug',
    component: ProductComponent,
    // pathMatch: 'full',
    children: [
      {
        path: "",
        redirectTo: "description",
        pathMatch: "prefix"
      },
      {
        path: "description",
        component: ProductDescriptionComponent
      },
      {
        path: "additional-info",
        component: ProductAdditionalInfoComponent
      },
      {
        path: "vendor-info",
        component: ProductVendorComponent
      },
      {
        path: "reviews",
        component: ProductReviewsComponent
      },
    ]
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
];
