import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ReceitaDetalheComponent } from '../receita-detalhe/receita-detalhe.component';



@NgModule({
  declarations: [HomeComponent,
  ReceitaDetalheComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class HomeModule { }
