import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css'],
})
export class AddCategoryComponent implements OnInit {
  title: string = '';
  description: string = '';
  @Output() categoryAdded = new EventEmitter<ICategory>();

  constructor() {}

  ngOnInit(): void {}

  onAddCategory() {
    let category: ICategory = {
      title: this.title,
      description: this.description,
    };
    this.categoryAdded.emit(category);
  }
}
