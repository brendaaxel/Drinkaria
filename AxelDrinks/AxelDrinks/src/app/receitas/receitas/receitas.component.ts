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
  public loader: boolean = false;
  public pesquisa: string = "";
  // public receitaRandon: ListaDeReceita[] = [];
  // pesquisaRandomica: string = "";
  public naoHaReceita: boolean;
  public erro: boolean = false;

  constructor(
    private receitasServico: ReceitasService,
  ) { }

  public receitas: ListaDeReceita[] = [];

  ngOnInit(): void {
  }

  chamarReceitasPorNome() {
    this.receitas = [];
    this.loader = true;
    this.naoHaReceita = false;

    this.receitasServico.pegarReceitasPorNome(this.removeAcentos(this.pesquisa).trim())
      .pipe(debounceTime(3000))
      .subscribe(resposta => {
        if (resposta.drinks && resposta.drinks.length > 0) {
          this.receitas = resposta.drinks;
          this.naoHaReceita = false;
          this.loader = false
        } else if (resposta.drinks === null) {
          this.receitas = resposta.drinks;
          this.naoHaReceita = true;
        }
      }, () => {
        this.erro = true;
        this.loader = false

      });
  }

  chamarReceitas(event: KeyboardEvent): void {
    if (event.keyCode == 13) {
      this.chamarReceitasPorNome();
    }
  };

  removeAcentos(palavra) {
    if (!palavra || typeof (palavra) !== 'string') {
      return '';
    }

    palavra = palavra.replace(new RegExp('[ÁÀÂÃ]', 'gi'), 'a');
    palavra = palavra.replace(new RegExp('[ÉÈÊ]', 'gi'), 'e');
    palavra = palavra.replace(new RegExp('[ÍÌÎ]', 'gi'), 'i');
    palavra = palavra.replace(new RegExp('[ÓÒÔÕ]', 'gi'), 'o');
    palavra = palavra.replace(new RegExp('[ÚÙÛ]', 'gi'), 'u');
    palavra = palavra.replace(new RegExp('[Ç]', 'gi'), 'c');
    return palavra.toLowerCase();
  };

  limparPesquisa() {
    this.pesquisa = '';
    this.receitas = [];
  }

  // chamarReceitaRandomica() {
  //   this.receitaRandon = [];

  //   this.receitasServico.pegarReceitasRandomicas()
  //     .subscribe(
  //       (resposta) => {
  //         this.receitaRandon = resposta.drinks;
  //       }, () => {
  //         this.erro = true;
  //       });
  // };

}


