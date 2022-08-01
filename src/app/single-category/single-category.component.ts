import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-single-category',
  templateUrl: './single-category.component.html',
  styleUrls: ['./single-category.component.css'],
})
export class SingleCategoryComponent implements OnInit {
  @Input() category: ICategory | null = null;
  @Output() categorySelected = new EventEmitter<ICategory>();
  @Output() categoryEdited = new EventEmitter<ICategory>();

  constructor() {}

  ngOnInit(): void {}

  onCategorySelect() {
    this.category && this.categorySelected.emit(this.category);
  }
  onEditCategory() {
    this.category && this.categoryEdited.emit(this.category);
  }
}
