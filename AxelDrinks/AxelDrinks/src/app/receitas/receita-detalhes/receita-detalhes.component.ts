import { Component, OnInit } from '@angular/core';
import { ReceitasService } from '../service/receitas.service';
import { ActivatedRoute } from "@angular/router";
import { ListaDeReceita } from '../models/receita';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-receita-detalhes',
  templateUrl: './receita-detalhes.component.html',
  styleUrls: ['./receita-detalhes.component.css']
})
export class ReceitaDetalhesComponent implements OnInit {
  public loader: boolean = false;
  public idDrink: string;
  public naoHaReceita: boolean = false
  public receita: ListaDeReceita[] = [];
  erro: boolean = false;

  constructor(
    private receitaService: ReceitasService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.idDrink = this.route.snapshot.paramMap.get('id');
    this.chamarReceitaPorId(this.idDrink);
  }

  chamarReceitaPorId(id) {
    this.receita = [];
    this.loader = true

    this.receitaService.pegarReceitasPorId(id)
      .pipe(debounceTime(3000))
      .subscribe((resposta) => {
        if (resposta.drinks && resposta.drinks.length > 0) {
          this.receita = resposta.drinks;
          this.erro = false;
          this.loader = false;
        } else {
          this.naoHaReceita = true;
        }
      }, () => {
        this.erro = true;
        this.loader = false;
      })
  }

  adicionarFavorito() {
    localStorage.setItem('mockBancoDados', JSON.stringify(this.receita));
  }

}
