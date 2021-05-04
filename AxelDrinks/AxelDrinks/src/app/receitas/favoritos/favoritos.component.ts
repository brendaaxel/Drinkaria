import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css']
})
export class FavoritosComponent implements OnInit {
  teste: [] = [];
  resultado;
  receitas: [];

  constructor() { }

  ngOnInit(): void {
    this.exibirFavoritos();


    console.log(this.receitas);
  };

  exibirFavoritos(): void {
    if (localStorage.getItem('mockBancoDados')) {
      this.receitas = JSON.parse(localStorage.getItem('mockBancoDados'));
    } else {
      this.receitas = [];
    }
  }



}
