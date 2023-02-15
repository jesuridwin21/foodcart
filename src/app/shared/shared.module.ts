import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptystateComponent } from './emptystate/emptystate.component';
import { CardSearchPipe } from '../pipes/card-search.pipe';
import { TotalAmountPipe } from '../pipes/total-amount.pipe';
import { SortReceipePipe } from '../pipes/sort-receipe.pipe';



@NgModule({
  declarations: [EmptystateComponent, CardSearchPipe, TotalAmountPipe, SortReceipePipe,],
  imports: [
    CommonModule
  ], exports: [EmptystateComponent, CardSearchPipe, TotalAmountPipe, SortReceipePipe,]
})
export class SharedModule { }
