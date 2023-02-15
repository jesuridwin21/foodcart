import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddrecipeComponent } from './addrecipe.component';

const routes: Routes = [
    { path: '', component: AddrecipeComponent },

];

@NgModule({
    declarations: [AddrecipeComponent],
    imports: [
        CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule
    ]
})
export class AddReceipeModule { }
