import { Component, OnInit } from '@angular/core';
import { Receita } from 'src/app/receitas/models/receita';
import { ReceitasService } from 'src/app/receitas/service/receitas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  receita: Receita;
  constructor(private receitasService: ReceitasService

  ) { }

  ngOnInit(): void {
    this.pegarReceitaRandomica()
  }

  pegarReceitaRandomica() {
    this.receitasService.pegarReceitasRandomicas().subscribe(
      (resposta) => {
        this.receita = resposta;
        console.log(resposta);
      }
    )
  }

}
