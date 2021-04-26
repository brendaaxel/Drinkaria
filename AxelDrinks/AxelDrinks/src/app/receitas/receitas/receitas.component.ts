import { Component, OnInit } from '@angular/core';
import { Receita } from '../models/receita';
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

  public receitas: Receita;

  ngOnInit(): void {
    // this.pegarReceitas();
    // console.log(this.receitas);

  }

  pegarReceitas() {
    this.receitasPorNome.pegarReceitasPorNome(this.pesquisa)
      .subscribe(resposta => {
        console.log(this.receitas);
        this.receitas = resposta;
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
