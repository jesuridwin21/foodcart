import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RecipeService } from '../services/recipe.service';
import { Receipe } from '../types/receipe';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  @ViewChild('fileInput', { static: true }) fileInput: any;
  addrecipe = this.formBuilder.group({
    recipename: ['', Validators.required],
    price: ['', Validators.required]
  });
  submitted = false;
  url = "./assets/imageicon.jpg";
recipename: any;

  constructor(private router: Router, private formBuilder: FormBuilder, private recipeService: RecipeService,
    private toast: NgToastService
  ) { }

  ngOnInit(): void {

  }

  onReset() {
    // this.addrecipe.setValue({ price: '', recipename: '' })
  }

  onSubmit() {
    const formValue = this.addrecipe.value
    if (formValue) {
      const receipe = {
        ...formValue, url: this.url
      }
      this.recipeService.addNewReceipes(receipe);
    }
    this.addrecipe.setValue({ price: '', recipename: '' })
    this.url = "./assets/imageicon.jpg";
    this.toast.success(
      {
        detail: "Success",
        summary: "New Recipe Added",
        duration: 3000
      })
  }

  uploadImage() {
    this.fileInput.nativeElement.click();
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.addEventListener("load", () => {
        const base64String = fileReader.result as string;
        this.url = base64String;
      });
    }
  }

}
