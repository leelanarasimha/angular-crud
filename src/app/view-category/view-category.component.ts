import { Component, Input, OnInit } from '@angular/core';
import { ICategory } from '../models/ICategory';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css'],
})
export class ViewCategoryComponent implements OnInit {
  @Input() category!: ICategory;

  constructor() {}

  ngOnInit(): void {}
}
