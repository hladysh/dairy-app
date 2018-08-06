import {Injectable} from '@angular/core';
import {Item} from "../shared/model/item.model";


@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemComents;
  itemId;
  items = [];

  constructor() {
  }
  
  showComments(item: Item) {
    this.itemComents = item;
  }

  addItem(item: Item) {
    if (!this.items) {
      this.items = [];
    }
    this.itemId++;
    this.items.push({
      name: item,
      totalComments: 0,
      id: this.itemId,
      comments: [],
    });
    localStorage.setItem('id', JSON.stringify(this.itemId));
    this.setItem(this.items);
  }

  deleteItem(id) {
    const newItems = this.items.filter(function (obj) {
      return obj.id !== id;
    });
    this.setItem(newItems);
    this.items = JSON.parse(localStorage.getItem('items'));
    this.itemComents = null;
  }

  addCommnet(comment, color) {
    const commentId = this.itemComents.id;
    const newItems = this.items.filter(function (obj) {
      return obj.id === commentId;
    });

    newItems.map(data => {
      data.comments.push({
        comment: comment,
        color: color,
      });
    });
    this.setItem(this.items);
  }

  setItem(items) {
    localStorage.setItem('items', JSON.stringify(items));
  }

}
