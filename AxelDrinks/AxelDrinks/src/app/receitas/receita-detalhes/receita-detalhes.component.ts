import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../service/receitas.service';
import { ActivatedRoute } from "@angular/router";
import { ListaDeReceita } from '../models/receita';


@Component({
  selector: 'app-receita-detalhes',
  templateUrl: './receita-detalhes.component.html',
  styleUrls: ['./receita-detalhes.component.css']
})
export class ReceitaDetalhesComponent implements OnInit {

  public idDrink: string;
  public receita: ListaDeReceita[] = [];
  // erro: boolean = false;
  erro;

  constructor(
    private receitaService: ReceitasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idDrink = this.route.snapshot.paramMap.get('id');
    this.chamarReceitaPorId(this.idDrink);
  }

  chamarReceitaPorId(id) {
    this.receitaService.pegarReceitasPorId(id)
      .subscribe((resposta) => {
        this.receita = resposta.drinks;
        this.erro = false;
      }, () => {
        //! menesagem de erro
        this.erro = true;
      })
  }

  adicionarFavorito(){

    localStorage.setItem('mockBancoDados',JSON.stringify(this.receita));
    console.log(this.receita);
    // localStorage.clear()

  }

}
