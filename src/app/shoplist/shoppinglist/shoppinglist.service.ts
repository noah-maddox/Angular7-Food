import { Ingredient } from './../../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  // this eventemitter can now emit our ingredient array
  // so the type it will pass on is an array of ingredients
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients() {
    // the slice method makes it to where we only get a copy of the ingredients array not the actual array
    return this.ingredients.slice();
  }

  onIngredientAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    // now here whenever we change this array
    // we call this ingredients changed and emit this event
    // so now we always have the right ingredients array in this service
    // and we inform other interested componenets about that change in the event we are emitting here
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  // this is a viable option but emitts too many events
   addIngredients(ingredients: Ingredient[]) {
  //   for (let ingredient of ingredients) {
  //     this.onIngredientAdded(ingredient);
  //   }

  // this is a solution which adds all of our ingredients in one go
  // and then emit our event
  // the ... operator allows us to spread our ingredients into
  // a list of single ingredients
  // we then emit that our ingredients changed so we then pass a copy with the slice method
  this.ingredients.push(...ingredients);
  this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
