import {Component, Input, OnInit} from '@angular/core';
import {ItemsService} from './items.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {
  item;

  constructor(public itemsService: ItemsService) {
  }

  ngOnInit() {
    this.itemsService.itemId = localStorage.getItem('id');
    if (!this.itemsService.itemId) {
      localStorage.setItem('id', '0');
      this.itemsService.itemId = localStorage.getItem('id');
    }


    const storedNames = JSON.parse(localStorage.getItem('items'));
    this.itemsService.items = storedNames;
  }

  onSubmit(newItem: NgForm) {
    this.itemsService.addItem(newItem.value.item);
    newItem.reset();
  }

}
