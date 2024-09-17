import { Inject, Injectable } from '@angular/core';
import { MiaCategory } from '../entities/mia_category';
import {
  MIA_CORE_PROVIDER,
  MiaBaseCrudHttpService,
  MiaCoreConfig,
} from '@doroteati/mia-core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class MiaCategoryService extends MiaBaseCrudHttpService<MiaCategory> {
  constructor(
    @Inject(MIA_CORE_PROVIDER) protected config: MiaCoreConfig,
    protected http: HttpClient
  ) {
    super(config, http);
    this.basePathUrl = config.baseUrl + 'mia-category';
  }
}
