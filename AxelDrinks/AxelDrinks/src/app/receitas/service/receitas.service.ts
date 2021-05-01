import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


import { ListaDeReceita, Receita } from '../models/receita';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/Rx';
import { map } from "rxjs/operators";



@Injectable()
export class ReceitasService {

  constructor(private http: HttpClient) { }


  pegarReceitasPorNome(consulta: string): Observable<Receita> {
    const endereco = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

    return this.http.get<Receita>(`${endereco}${consulta}`)
    // .pipe(map(response => response))

  }

  // return this.http.get('http://localhost/ionicapis/public/api/products')
  // .pipe(map(res => res.json()));

  //   reviewsOfRestaurant(id: string): Observable<any>{
  //     return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
  //     .map(response => response.json())
  //     // .catch(ErrorHandler.handleError)
  // }




  pegarReceitasRandomicas(): Observable<Receita> {
    const endereco = 'https://www.thecocktaildb.com/api/json/v1/1/';

    return this.http.get<Receita>(`${endereco}random.php`)
  };

  pegarReceitasPorId(id): Observable<Receita> {
    const endereco = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    return this.http.get<Receita>(`${endereco}${id}`)

  }


}
