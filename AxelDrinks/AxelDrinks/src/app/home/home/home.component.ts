import { Component, OnInit } from '@angular/core';
import { ListaDeReceita } from '../../receitas/models/receita';
import { ReceitasService } from '../../receitas/service/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public receita: ListaDeReceita[] = [];
  pesquisa: string = "";
  erro: boolean = false;


  constructor(private receitasService: ReceitasService

  ) { }

  ngOnInit(): void {
    this.pegarReceitaRandomica()
    // debugger;
    // console.log(this.receita);

  }

  pegarReceitaRandomica() {
    this.receita = [];

    this.receitasService.pegarReceitasRandomicas()
      .subscribe(
        (resposta) => {
          this.receita = resposta.drinks;
          // debugger;
          console.log(this.receita);
        }, () => {
          //! menesagem de erro
          this.erro = true;
        })
  }

}
