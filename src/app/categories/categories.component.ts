import { Component, OnInit } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categories: ICategory[] = [
    { id: 1, title: 'Category1', description: 'Category Description' },
  ];

  selectedCategory: ICategory | null = null;
  editCategoryDetails: ICategory | null = null;

  constructor() {}

  ngOnInit(): void {}

  onCategoryAdd(category: ICategory) {
    category.id = this.categories.length + 1;
    this.categories.push(category);
  }

  onCategorySelected(category: ICategory) {
    this.selectedCategory = category;
    this.editCategoryDetails = null;
  }

  onCategoryEdited(category: ICategory) {
    this.editCategoryDetails = category;
    this.selectedCategory = null;
  }

  onUpdateCategory(category: ICategory) {
    this.categories = this.categories.map((cat) => {
      if (category.id === cat.id) {
        return category;
      }
      return cat;
    });
  }
}
