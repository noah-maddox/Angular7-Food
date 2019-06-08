import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipelist',
  templateUrl: './recipelist.component.html',
  styleUrls: ['./recipelist.component.css']
})
export class RecipelistComponent implements OnInit {
  recipes: Recipe[];


  // below you are injecting the services and routes you want to use in this componenet
  // this is very important!
  // injeting the ActivatedRoute service allows us to use the relativeTo methow below
  constructor(private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onNewRecipe() {
    // we are able to use a relative path (route) and just go to 'new'
    // because we are already on the /recipe path
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
