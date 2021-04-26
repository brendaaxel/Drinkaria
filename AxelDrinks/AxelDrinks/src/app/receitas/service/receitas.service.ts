import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Receita } from '../models/receita';


@Injectable()
export class ReceitasService {

  constructor( private http: HttpClient) { }
 

  pegarReceitasPorNome(consulta: string): Observable<Receita> {
    const endereco = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    return this.http.get<Receita>(`${endereco}${consulta}`);
  }

  pegarReceitasRandomicas(): Observable<Receita> {
    const endereco = 'https://www.thecocktaildb.com/api/json/v1/1/';

    return this.http.get<Receita>(`${endereco}random.php`)
  }

}
