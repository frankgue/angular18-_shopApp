import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { interval, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [];
  private urlApi: string = environment.serverUrl.products;

  constructor(private http: HttpClient) {}

  // getProducts(): Promise<Product[]> {
  //   return new Promise((resolve, reject) => {
  //     if (this.products.length) {
  //       resolve(this.products);
  //     } else {
  //       reject([]);
  //     }
  //   });
  // }

  // getProducts(): Observable<Product[]> {
  //   return this.http.get<Product[]>(this.urlApi);
  // }

  getProducts(): Observable<ResultRequest<Product>> {
    return this.http.get<ResultRequest<Product>>(this.urlApi);
  }

  getNumber(): Observable<Number> {
    return of(60);
  }

  getSecond(): Observable<Number> {
    return interval(1000);
  }

  addProducts(product: Product) {
    this.products.push(product);
  }

  editProduct(_id: string, product: Product) {}

  deleteProduct(_id: string) {
    this.products = this.products.filter((product) => product._id !== _id);
  }
}
