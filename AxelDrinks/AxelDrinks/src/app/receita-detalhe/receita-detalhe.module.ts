import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ReceitaDetalheComponent } from "./receita-detalhe.component";

@NgModule({
  declarations: [
    ReceitaDetalheComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  providers: []

})
export class ReceitaDetalheModule { }