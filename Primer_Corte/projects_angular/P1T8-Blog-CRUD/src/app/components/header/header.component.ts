import { Component, OnInit } from '@angular/core';
import { CATEGORIES } from '../../mocks/category-mocks';
import { Category } from '../../models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public title: string;

  public selectedCategory: Category;
  public arrayCategories: Category[];

  constructor() {
    this.title = 'Tomasino Newspaper';
    this.selectedCategory = new Category(0, '');
    this.arrayCategories = CATEGORIES;
  }

  ngOnInit(): void {
  }

}
