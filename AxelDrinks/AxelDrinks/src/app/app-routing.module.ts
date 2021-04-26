import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';
import { ReceitasComponent } from './receitas/receitas/receitas.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'receitas',
    component: ReceitasComponent,
  },
  {
    path: 'receita-detalhe',
    component: ReceitaDetalheComponent
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
