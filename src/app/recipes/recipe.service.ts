import { ShoppingListService } from './../shoplist/shoppinglist/shoppinglist.service';
import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

// this allows us to inject another service into this one
@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'French Recipe',
      'A tasty french dish',
      'https://www.maxpixel.net/static/photo/2x/Mushrooms-Recipe-Kitchen-French-Dish-2459679.jpg',
      [
        new Ingredient('Mushroom', 10),
        new Ingredient('Soup', 1)
      ]),
     new Recipe(
       'American Recipe',
       'A tasty burger',
       'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrfURE14y9Ms04VsSUtMD_p2MlJTy294eGBJoUdTB6074Re-Vp',
       [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
       ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    // the slice method makes it to where we only get a copy of the recipes array not the actual array
    return this.recipes.slice();
  }

  // this is a method in the service to return a single recipe
  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
