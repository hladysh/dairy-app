import {Component} from '@angular/core';
import {ItemsService} from '../items.service';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.sass']
})
export class CommentsComponent {
  // comment;

  constructor(public itemsService: ItemsService) {
  }

  keyDownFunction(event, addCommnets) {
    if (event.ctrlKey && event.keyCode === 13) {
      const color = this.getColor();
      this.itemsService.addCommnet(addCommnets.value.comment, color);
      addCommnets.reset();
    }
  }

  getColor() {
    return '#' + ((1 << 24) * Math.random() | 0).toString(16);
  }
}
