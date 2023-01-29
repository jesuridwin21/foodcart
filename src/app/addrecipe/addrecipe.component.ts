import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Receipe } from '../types/receipe';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  addrecipe = this.formBuilder.group({
    recipename: [''],
    price: ['']
  });
  submitted = false;
  url = "./assets/imageicon.jpg";

  constructor(private router: Router, private formBuilder: FormBuilder, private recipeService: RecipeService) { }

  ngOnInit(): void {

  }

  onReset() {
    this.addrecipe.setValue({ price:'' , recipename: '' })
  }

  onSubmit() {
    // localStorage.setItem('newitem',JSON.stringify(data));
    const formValue = this.addrecipe.value
    if (formValue) {
      this.recipeService.addNewReceipes(formValue);
    }
    this.addrecipe.setValue({ price: '', recipename: '' })



  }

}
