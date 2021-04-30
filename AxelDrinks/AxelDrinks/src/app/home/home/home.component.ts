import { Component, OnInit } from '@angular/core';
import { ListaDeReceita, Receita } from 'src/app/receitas/models/receita';
import { ReceitasService } from 'src/app/receitas/service/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  receita: ListaDeReceita[] = [];

  pesquisa: string = "";


  constructor(private receitasService: ReceitasService

  ) { }

  ngOnInit(): void {
    this.pegarReceitaRandomica()
    // debugger;

  }

  pegarReceitaRandomica() {
  this.receita = [];

    this.receitasService.pegarReceitasRandomicas().subscribe(
      (resposta) => {
        this.receita = resposta.drinks;
        // debugger;
        console.log(this.receita);
      }
    )
  }

}
