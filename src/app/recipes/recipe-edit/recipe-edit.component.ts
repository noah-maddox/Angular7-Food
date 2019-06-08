import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  // editMode will help us determine if we are in editMode or not
  editMode = false;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        // params will only be not undefined if we are in edit mode
        // becuz then an id will be present
        // if this check returns true, so if id is null then this will return false and we are in new mode
        this.editMode = params['id'] != null;
        console.log(this.editMode);
      }
    );
  }

}
