import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './receitas/receitas.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FavoritosComponent } from './favoritos/favoritos.component';



@NgModule({
  declarations: [ReceitasComponent,
    FavoritosComponent,
  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    FormsModule,
    RouterModule,
    MatIconModule
    
   
    
  ]
})
export class ReceitasModule { }
