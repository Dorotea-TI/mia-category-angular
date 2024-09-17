import { MiaModel } from '@doroteati/mia-core';

export class MiaCategory extends MiaModel {
  id: number = 0;
  title: string = '';
  slug: string = '';
  status: number = 0;
  icon: string = '';
  type: number = 0;
  is_featured: number = 0;
  caption?: string = '';
  is_show?: number = 1;
  parent_id?: number;
}
