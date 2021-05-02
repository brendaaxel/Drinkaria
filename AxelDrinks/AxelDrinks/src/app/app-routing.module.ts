import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './navegacao/home/home.component';
import { ReceitaDetalhesComponent } from './receitas/receita-detalhes/receita-detalhes.component';
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
    path: 'receitas/detalhes-receita/:id',
    component: ReceitaDetalhesComponent
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
