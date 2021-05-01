import { Component, OnInit } from '@angular/core';
import { ListaDeReceita } from '../receitas/models/receita';
import { ReceitasService } from '../receitas/service/receitas.service';
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'app-receita-detalhe',
  templateUrl: './receita-detalhe.component.html',
  styleUrls: ['./receita-detalhe.component.css']
})
export class ReceitaDetalheComponent implements OnInit {

  idDrink: string;
  public receita: ListaDeReceita[] = [];
  erro: boolean = false;

  constructor(
    private receitaService: ReceitasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.idDrink = this.route.snapshot.paramMap.get('id');
    this.chamarReceitaPorId(this.idDrink)
  }

  chamarReceitaPorId(id) {
    this.receitaService.pegarReceitasPorId(id)
      .subscribe((resposta) => {
        this.receita = resposta.drinks;
      }, () => {
        //! menesagem de erro
        this.erro = true;
      })
  }

}
