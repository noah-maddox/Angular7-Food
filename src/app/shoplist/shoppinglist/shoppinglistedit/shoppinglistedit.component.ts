import { ShoppingListService } from './../shoppinglist.service';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shoppinglistedit',
  templateUrl: './shoppinglistedit.component.html',
  styleUrls: ['./shoppinglistedit.component.css']
})
export class ShoppinglisteditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  // this: {name: string, amount: number} is simply defining the definition of the property
  // "type definition" of the event to be emitted
  // but instead of hard-defining the json object we can just use the Ingredient model
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();

  constructor(private shoppinglistservice: ShoppingListService) { }

  ngOnInit() {
  }

  onAddItem() {
    // we use const instead of let because we do not plan on changing these values
    const ingName = this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(ingName, ingAmount);
    this.shoppinglistservice.onIngredientAdded(newIngredient);
  }

}
