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

  constructor(
    private receitasPorNome: ReceitasService) { }

  public receitas: ListaDeReceita[] = [];
  // public receitas;

  ngOnInit(): void {
    // console.log(this.receitas);

  }

  pegarReceitas() {
    this.receitasPorNome.pegarReceitasPorNome(this.pesquisa)
      .subscribe(resposta => {
        this.receitas = resposta.drinks;
        console.log(this.receitas);
      });
  }
  //       error => console.log(error)
  //     );


  chamarReceitas(event: KeyboardEvent) {
    if (event.keyCode == 13) {
      this.pegarReceitas();
      // console.log(this.receitas);

    }
  }

}
