import { Component } from '@angular/core';
import { MiaCategoryModalService } from 'projects/doroteati/mia-category-editor/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(protected categoryModal: MiaCategoryModalService) {}

  onClickOrganize() {
    let dialog = this.categoryModal.openOrganize(1);
    dialog.actions.subscribe((res) => {
      console.log('action');
      console.log(res);
      if (res.action == 'loaded') {
        dialog.loadItems([
          { category_id: 1, title: 'Option 1' },
          { category_id: 1, title: 'Option 2' },
          { category_id: 2, title: 'Option 3' },
          { category_id: 1, title: 'Option 4' },
          { category_id: 1, title: 'Option 5' },
          { category_id: 2, title: 'Option 6' },
          { category_id: 1, title: 'Option 7' },
        ]);
      } else if (res.action == 'saving') {
        console.log(res.item);
        dialog.savedSuccess();
      }
    });
  }
}
