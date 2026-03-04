import { Injectable } from '@angular/core';
import { MiaCategory } from '../entities/mia_category';
import { MiaBaseCrudHttpService } from '@doroteati/mia-core';

@Injectable({
  providedIn: 'root',
})
export class MiaCategoryService extends MiaBaseCrudHttpService<MiaCategory> {
  constructor() {
    super();
    this.basePathUrl = this.config.baseUrl + 'mia-category';
  }
}
