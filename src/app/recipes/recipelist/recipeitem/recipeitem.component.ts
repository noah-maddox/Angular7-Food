import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipeitem',
  templateUrl: './recipeitem.component.html',
  styleUrls: ['./recipeitem.component.css']
})
export class RecipeitemComponent implements OnInit {
  // this line of code: @Input() index: number; allows you to pass in the index of an item
  // into this component from outside this component
  @Input() recipe: Recipe;
  @Input() index: number;
  // below is my code for emitting my own event. This will allow for event emitting in the
  // recipeitem.html file when the link is clicked (click)
  // @Output allows for this event to be listened to from outside this component
  // @Output() recipeSelected = new EventEmitter<void>();

  // constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
