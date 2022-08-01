import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css'],
})
export class EditCategoryComponent {
  @Input() category!: ICategory;
  @Output() categoryUpdated = new EventEmitter<ICategory>();
  title: string = '';
  description: string = '';

  ngOnChanges() {
    this.title = this.category.title;
    this.description = this.category.description;
  }

  onUpdateCategory() {
    let category: ICategory = {
      id: this.category.id,
      title: this.title,
      description: this.description,
    };
    this.categoryUpdated.emit(category);
  }
}
