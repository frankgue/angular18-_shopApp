import { Injectable } from '@angular/core';
import { Category } from '../models/category';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ResultRequest } from '../models/result-request';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  apiUrl: string = environment.serverUrl.categories;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<ResultRequest<Category>> {
    return this.http.get<ResultRequest<Category>>(this.apiUrl);
  }
}
