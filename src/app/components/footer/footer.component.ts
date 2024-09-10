import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { PaymentCardComponent } from '../payment-card/payment-card.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [PaymentCardComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent implements OnInit {
  siteName: string = environment.siteName;

  constructor() {}

  ngOnInit(): void {}
}
