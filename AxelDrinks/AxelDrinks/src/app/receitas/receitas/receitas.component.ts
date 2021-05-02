import { Component, OnInit } from '@angular/core';
import { ListaDeReceita, Receita } from '../models/receita';
import { ReceitasService } from '../service/receitas.service';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
   pesquisa: string = "";
  // public receitaRandon: ListaDeReceita[] = [];
  // pesquisaRandomica: string = "";
  // erro: boolean = false;

  constructor(
    private receitasPorNome: ReceitasService,
    // private receitaRandomicaService: ReceitasService
    ) { }

  public receitas: ListaDeReceita[] = [];
  // public receitas;

  ngOnInit(): void {
    // this.pegarReceitaRandomica()

  }

  chamarReceitasPorNome() {
    this.receitasPorNome.pegarReceitasPorNome(this.pesquisa)
      .subscribe(resposta => {
        this.receitas = resposta.drinks;
        // console.log(this.receitas);
      });
  }
  //       error => console.log(error)
  //     );


  chamarReceitas(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.chamarReceitasPorNome();
      // console.log(this.receitas);

    }
  }

  // pegarReceitaRandomica() {
    //   this.receita = [];
  
    //   this.receitaRanomicaService.pegarReceitasRandomicas()
    //     .subscribe(
    //       (resposta) => {
    //         this.receitaRandon = resposta.drinks;
    //       }, () => {
    //         //! menesagem de erro
    //         this.erro = true;
    //       })
    // }

}
