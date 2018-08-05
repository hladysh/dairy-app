import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  itemComents;
  itemId;

  constructor() {
  }

  items = [];

  showComments(item) {
    this.itemComents = item;
  }

  addItem(item) {
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
    localStorage.setItem('items', JSON.stringify(this.items));
  }

  deleteItem(id) {
    const newItems = this.items.filter(function (obj) {
      return obj.id !== id;
    });
    localStorage.setItem('items', JSON.stringify(newItems));
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
        name: comment,
        color: color,
      });
    });
    localStorage.setItem('items', JSON.stringify(this.items));
  }
}
