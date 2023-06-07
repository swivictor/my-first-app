import { Component } from '@angular/core';
import { Recipe } from '../recipies.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    // NOTE - Create a new dummay Recipe with Recipe Model
    new Recipe(
      'A Test Recipe',
      'This is a Test Recipe',
      'https://www.livecrafteat.com/wp-content/uploads/2016/01/salad-ingredients.jpg'
    ),
  ];
}
