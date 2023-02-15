import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomescreenComponent } from './homescreen.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: HomescreenComponent },

];

@NgModule({
    declarations: [HomescreenComponent],
    imports: [
        CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, SharedModule
    ]
})
export class HomeModule { }
