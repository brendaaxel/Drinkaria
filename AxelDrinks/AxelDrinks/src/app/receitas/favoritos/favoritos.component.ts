import { Component, OnInit } from '@angular/core';
import { ListaDeReceita } from '../models/receita';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  public receitas:ListaDeReceita [];
  
  constructor() { }
  
  ngOnInit(): void {
    this.exibirFavoritos();
  };
  
  exibirFavoritos(): void {
    if (localStorage.getItem('mockBancoDados')) {
      this.receitas = JSON.parse(localStorage.getItem('mockBancoDados'));
    } else {
      this.receitas = [];
    }
  };

  limparLocalStorage():void {
    localStorage.clear()
    this.receitas = [];
  };
}
