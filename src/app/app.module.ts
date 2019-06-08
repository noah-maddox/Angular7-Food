import { AppRoutingModule } from './app-routing.module';
import { ShoppingListService } from './shoplist/shoppinglist/shoppinglist.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShoppinglisteditComponent } from './shoplist/shoppinglist/shoppinglistedit/shoppinglistedit.component';
import { ShoppinglistComponent } from './shoplist/shoppinglist/shoppinglist.component';
import { HeaderComponent } from './header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipedetailComponent } from './recipes/recipedetail/recipedetail.component';
import { RecipelistComponent } from './recipes/recipelist/recipelist.component';
import { RecipeitemComponent } from './recipes/recipelist/recipeitem/recipeitem.component';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppinglisteditComponent,
    ShoppinglistComponent,
    HeaderComponent,
    RecipesComponent,
    RecipedetailComponent,
    RecipelistComponent,
    RecipeitemComponent,
    DropdownDirective,
    RecipeStartComponent,
    RecipeEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [ShoppingListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
