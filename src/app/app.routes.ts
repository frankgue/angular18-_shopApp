import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { ProductComponent } from './components/product/product.component';

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
    path: 'product/:slug',
    component: ProductComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full',
  },
];
