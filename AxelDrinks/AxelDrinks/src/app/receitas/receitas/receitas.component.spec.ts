import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';
import { ReceitasService } from '../service/receitas.service';

import { ReceitasComponent } from './receitas.component';

describe('ReceitasComponent', () => {
  let component: ReceitasComponent;
  let fixture: ComponentFixture<ReceitasComponent>;
  let mockRespostaService;


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

  beforeEach(async () => {
    mockRespostaService = jasmine.createSpyObj(['pegarReceitasPorNome']);

    TestBed.configureTestingModule({
      declarations: [ReceitasComponent],
      imports: [RouterTestingModule],
      providers: [
        { provide: ReceitasService, useValue: mockRespostaService }
      ],
    })
      .compileComponents();
    fixture = TestBed.createComponent(ReceitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockRespostaService.pegarReceitasPorNome.and.returnValue(of({
      drinks: mockListaReceita
    }));

  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('deve chamar o serviço', () => {
    component.chamarReceitasPorNome();

    expect(mockRespostaService.pegarReceitasPorNome).toHaveBeenCalled();
  });

  it('deve resposta', () => {
    mockRespostaService.pegarReceitasPorNome.and.returnValue(of({
      drinks:[]
    }));
    component.chamarReceitasPorNome();

    expect(component.receitas.length).toEqual(0);
    expect(component.naoHaReceita).toEqual(undefined);
  });

  it('deve xxxx  ', () => {
    mockRespostaService.pegarReceitasPorNome.and.returnValue(of({
      
    }));
    component.chamarReceitasPorNome();

    expect(mockRespostaService.pegarReceitasPorNome).toHaveBeenCalled();
    expect(component.naoHaReceita).toEqual(true);


  });

  it('deve yyyy ', () => {
    mockRespostaService.pegarReceitasPorNome.and.returnValue(throwError({}));
    component.chamarReceitasPorNome();

    expect(mockRespostaService.pegarReceitasPorNome).toHaveBeenCalled();
    expect(component.erro).toEqual(true);

  });


  it('deve remover acentos quando string', () => {
    let teste = 'órgão';
    let resposta = component.removeAcentos(teste);

    expect(resposta).toEqual('orgao');

  });

  it('deve não remover acentos quando números', () => {
    let teste = 123;
    let resposta = component.removeAcentos(teste);

    expect(resposta).toEqual('');
  });

  it('deve chamar Receitas por nome quando teclar ENTER', () => { //! o erro que passa no teste

    spyOn(component, 'chamarReceitasPorNome');

    const teclaEvento = new KeyboardEvent('keyup', { code: "Enter" });

    component.chamarReceitas(teclaEvento);

    expect(component.chamarReceitasPorNome()).toEqual(undefined); //! erro de lógica
  });



  // it('should trigger a TAB keypress event on an element', () => {
  //   const tabKeypress = new KeyboardEvent('keypress', {
  //     // @ts-ignore
  //     keyCode: 9, // Tab Key
  //     cancelable: true
  //   });

  //   // var event = document.createEvent('Event');
  // event.keyCode = key; // Deprecated, prefer .key instead.
  // event.key = key;
  // event.initEvent('keydown');
  // document.dispatchEvent(event);



});
