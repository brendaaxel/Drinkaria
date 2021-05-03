import { HttpClient } from '@angular/common/http';
import { flushMicrotasks, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { ReceitasService } from './receitas.service';

describe('ReceitasService', () => {
  let service: ReceitasService;
  let mockHttpService;
  const endereco = 'https://www.thecocktaildb.com/api/json/v1/1/';


  const mockListaReceita = [
    {
      idDrink: "11007",
      strDrink: "Margarita",
      strDrinkAlternate: null,
      strTags: "IBA,ContemporaryClassic",
      strVideo: null,
      strCategory: "Ordinary Drink",
      strIBA: "Contemporary Classics",
      strAlcoholic: "Alcoholic",
      strGlass: "Cocktail glass",
      strInstructions: "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass.",
      strInstructionsES: null,
      strInstructionsDE: "Reiben Sie den Rand des Glases mit der Limettenscheibe, damit das Salz daran haftet. Achten Sie darauf, dass nur der \u00e4u\u00dfere Rand angefeuchtet wird und streuen Sie das Salz darauf. Das Salz sollte sich auf den Lippen des Genie\u00dfers befinden und niemals in den Cocktail einmischen. Die anderen Zutaten mit Eis sch\u00fctteln und vorsichtig in das Glas geben.",
      strInstructionsFR: null,
      strInstructionsIT: "Strofina il bordo del bicchiere con la fetta di lime per far aderire il sale.\r\nAvere cura di inumidire solo il bordo esterno e cospargere di sale.\r\nIl sale dovrebbe presentarsi alle labbra del bevitore e non mescolarsi mai al cocktail.\r\nShakerare gli altri ingredienti con ghiaccio, quindi versarli delicatamente nel bicchiere.",
      strDrinkThumb: "https:\/\/www.thecocktaildb.com\/images\/media\/drink\/5noda61589575158.jpg",
      strIngredient1: "Tequila",
      strIngredient2: "Triple sec",
      strIngredient3: "Lime juice",
      strIngredient4: "Salt",
      strMeasure1: "1 1\/2 oz ",
      strMeasure2: "1\/2 oz ",
      strMeasure3: "1 oz ",
      strMeasure4: null,
      strImageSource: "https:\/\/commons.wikimedia.org\/wiki\/File:Klassiche_Margarita.jpg",
      strImageAttribution: "Cocktailmarler",
      strCreativeCommonsConfirmed: "Yes",
      dateModified: "2015-08-18 14:42:59"
    }
  ]

  beforeEach(() => {
    mockHttpService = jasmine.createSpyObj('', ['get']);

    TestBed.configureTestingModule({
      providers: [
        ReceitasService,
        { provide: HttpClient, useValue: mockHttpService }
      ]
    });

    mockHttpService.get.and.returnValue(of({
      drinks: mockListaReceita
    }));

    service = TestBed.get(ReceitasService);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('deve pegar receita por nome ', async () => {
    let pesquisa = 'caipirinha';
    let resposta = await service.pegarReceitasPorNome(pesquisa).toPromise();

    expect(resposta.drinks.length).toEqual(mockListaReceita.length);

    expect(mockHttpService.get).toHaveBeenCalledWith(`${endereco}search.php?s=${pesquisa}`)

  });

  it('deve pegar receitas Randômicas', async () => {
    let pesquisa = 'random.php';
    await service.pegarReceitasRandomicas().toPromise();

    expect(mockHttpService.get).toHaveBeenCalledWith(`${endereco}${pesquisa}`);
  });

  it('deve pegar receitas por Id', async () => {
    let pesquisa = '123';
    let resposta = await service.pegarReceitasPorId(pesquisa).toPromise();

    expect(resposta.drinks.length).toEqual(mockListaReceita.length);
    expect(mockHttpService.get).toHaveBeenCalledWith(`${endereco}lookup.php?i=${pesquisa}`);
    
  });

});
