import { Component, OnInit } from '@angular/core';
import { ListaDeReceita, Receita } from '../models/receita';
import { ReceitasService } from '../service/receitas.service';
import { debounceTime } from 'rxjs/operators'

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit {
  pesquisa: string = "";
  // public receitaRandon: ListaDeReceita[] = [];
  // pesquisaRandomica: string = "";
  naoHaReceita;
  erro: boolean = false;

  constructor(
    private receitasPorNome: ReceitasService,
    // private receitaRandomicaService: ReceitasService
  ) { }

  public receitas: ListaDeReceita[] = [];
  // public receitas;

  ngOnInit(): void {
  }

  chamarReceitasPorNome() {
    this.receitas = [];
    this.receitasPorNome.pegarReceitasPorNome(this.removeAcentos(this.pesquisa).trim())
      .pipe(debounceTime(3000))
      .subscribe(resposta => {
        if (resposta.drinks && resposta.drinks.length > 0) {
          this.receitas = resposta.drinks;
          this.naoHaReceita = false;
        }
        if (resposta.drinks == null) {
          this.receitas = resposta.drinks;
          this.naoHaReceita = true;
          console.log(this.naoHaReceita);
        }
      }, () => {
        //         //! menesagem de erro
        this.erro = true;
      });
  }

  chamarReceitas(event: KeyboardEvent) {
    if (event.keyCode ==13) {
      this.chamarReceitasPorNome();
    }
  };


  removeAcentos (string)  {       
    if (!string || typeof (string) !== 'string') {
      return '';
    }
    
    string = string.replace(new RegExp('[ÁÀÂÃ]','gi'), 'a');
    string = string.replace(new RegExp('[ÉÈÊ]','gi'), 'e');
    string = string.replace(new RegExp('[ÍÌÎ]','gi'), 'i');
    string = string.replace(new RegExp('[ÓÒÔÕ]','gi'), 'o');
    string = string.replace(new RegExp('[ÚÙÛ]','gi'), 'u');
    string = string.replace(new RegExp('[Ç]','gi'), 'c');
      return string.toLowerCase();                 
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


