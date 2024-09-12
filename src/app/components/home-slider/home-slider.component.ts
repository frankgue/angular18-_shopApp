import { Component, NgModule, OnDestroy, OnInit } from '@angular/core';
import { Slide } from '../../models/slide';
import { sliderData } from '../../api/api-slider';
import { CommonModule } from '@angular/common';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-slider.component.html',
  styleUrl: './home-slider.component.css',
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  slider: Slide[] = sliderData;
  currentIndex: number = 0;
  currentSlide: Slide = this.slider[0];

  indexObs: Observable<number> = interval(5000);
  indexObservableSubscription: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {
    this.indexObservableSubscription = this.indexObs.subscribe({
      next: (value: number) => {
        this.handleChangeImage(1);
      },
      error: (err) => {
        console.log('Error => ', err);
      },
      complete: () => {
        console.log('Completes');
      },
    });
  }

  handleChangeImage(index: number) {
    this.currentIndex = this.slider.indexOf(this.currentSlide);

    if (index === -1) {
      //previous
      switch (this.currentIndex) {
        case 0:
          this.currentIndex = this.slider.length - 1;
          break;
        default:
          this.currentIndex = this.currentIndex - 1;
      }
    }
    if (index === 1) {
      switch (this.currentIndex) {
        case this.slider.length - 1:
          this.currentIndex = 0;
          break;
        default:
          this.currentIndex = this.currentIndex + 1;
      }
    }

    this.currentSlide = this.slider[this.currentIndex];
  }

  ngOnDestroy(): void {
    this.indexObservableSubscription?.unsubscribe();
  }
}
