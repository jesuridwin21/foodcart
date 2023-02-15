import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CardlistComponent } from './cardlist.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
    { path: '', component: CardlistComponent },

];

@NgModule({
    declarations: [CardlistComponent],
    imports: [
        CommonModule, RouterModule.forChild(routes), FormsModule, ReactiveFormsModule, SharedModule
    ]
})
export class CardListModule { }
