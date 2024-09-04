import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-product-view',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-product-view.component.html',
  styleUrl: './modal-product-view.component.css',
})
export class ModalProductViewComponent implements OnInit {
  @Input() product: Product | undefined;

  @Output() close: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  closeModal() {
    this.close.emit();
  }
}
