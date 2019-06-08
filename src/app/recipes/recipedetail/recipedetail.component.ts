import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  // this is an important step in using services you build. You have to inject services
  // into componenets to be able to use them. You will need this for other apps
  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

              // what this will return is an id in the form of a number
              // which we can use to id our recipe
  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        // the + will cast our return value to a string
          this.id = +params['id'];
          // we are fetching the recipeservice whenever the id changes
          // and we will call getrecipe and pass the id as an arg
          this.recipe = this.recipeService.getRecipe(this.id);

      }
    );
  }

  onAddToShoppingList() {
    // here we are calling the method from the recipeService and passing
    // the ingredients of the specific recipe we are on
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }

  // what we are doing here is basically navigating to the current id and then adding the /edit path
  // depending on the id we are on
  // the commented out line is another approach that is more hard-coded
  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
   // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

}
