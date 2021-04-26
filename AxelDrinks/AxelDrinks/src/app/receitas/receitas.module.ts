import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReceitasRoutingModule } from './receitas-routing.module';
import { ReceitasComponent } from './receitas/receitas.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';



@NgModule({
  declarations: [ReceitasComponent,

  ],
  imports: [
    CommonModule,
    ReceitasRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    RouterModule,
    MatButtonToggleModule,
    MatCheckboxModule
  ]
})
export class ReceitasModule { }
