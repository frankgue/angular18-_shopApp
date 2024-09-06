import { Component, OnInit } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ModalProductViewComponent } from '../modal-product-view/modal-product-view.component';
import { SignupComponent } from '../auth/signup/signup.component';
import { SigninComponent } from '../auth/signin/signin.component';
import { LoadingComponent } from '../loading/loading.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    ProductListComponent,
    ModalProductViewComponent,
    SignupComponent,
    SigninComponent,
    LoadingComponent,
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit {
  ngOnInit(): void {}
}
