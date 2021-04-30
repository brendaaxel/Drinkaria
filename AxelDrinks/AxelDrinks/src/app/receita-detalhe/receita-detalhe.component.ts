import { Component, OnInit } from '@angular/core';
import { ListaDeReceita } from '../receitas/models/receita';
import { ReceitasService } from '../receitas/service/receitas.service';

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css']
})
export class ReceitaDetalheComponent implements OnInit {

  drink: number = 0;
  receita: ListaDeReceita[] = [];
  erro: boolean = false;


  constructor(
    private receitaService: ReceitasService
  ) { }

  ngOnInit(): void {
    this.pegarReceitaPorId()
  }

  pegarReceitaPorId() {
    this.receitaService.pegarReceitasPorId(this.drink)
      .subscribe((resposta) => {
        this.receita = resposta.drinks
      }, () => {
        //! menesagem de erro
        this.erro = true;
      })
  }

}
