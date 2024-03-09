import { Component } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css',
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'test desc',
      'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/23/0/FNK_Goulash-H_s4x3.jpg.rend.hgtvcom.826.620.suffix/1592939451186.jpeg'
    ),
    new Recipe(
      'A test recipe two',
      'test desc',
      'https://media-cdn.tripadvisor.com/media/photo-s/29/4d/4b/17/caption.jpg'
    ),
  ];

  constructor() {}
}
