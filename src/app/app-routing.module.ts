import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppinglistComponent } from './shoplist/shoppinglist/shoppinglist.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

// we need two routes. One for our shoppinglist section
// and one for our recipe section
const appRoutes: Routes = [
  // what pathMatch is doing below is to override the default prefix
  // and only redirect if the full path is empty so we wont redirect on any other paths
  { path: '', redirectTo: '/recipes', pathMatch: 'full'},
  { path: 'recipes', component: RecipesComponent, children: [
    { path: '', component: RecipeStartComponent },
    // with the two RecipeEditComponent paths laid out we will determine in the comp
    // if we are in edit mode or not and therefore choose the path that way
    { path: 'new', component: RecipeEditComponent },
    { path: ':id', component: RecipedetailComponent },
    { path: ':id/edit', component: RecipeEditComponent }
  ] },
  { path: 'shopping-list', component: ShoppinglistComponent }
];

// NgMOdule takes a js object and lets us configure it in greater detail
@NgModule({
  // here we are configuring the routerModule angular ships with
  // to make it aware of our own custom routes
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
