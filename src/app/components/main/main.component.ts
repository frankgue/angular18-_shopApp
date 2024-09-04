import { Component } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ModalProductViewComponent } from "../modal-product-view/modal-product-view.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ProductListComponent, ModalProductViewComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

}
