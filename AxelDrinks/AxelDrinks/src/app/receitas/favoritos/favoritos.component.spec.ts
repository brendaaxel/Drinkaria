import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritosComponent } from './favoritos.component';

describe('FavoritosComponent', () => {
  let component: FavoritosComponent;
  let fixture: ComponentFixture<FavoritosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoritosComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
      
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('deve chamar exibirFavoritos', () => {
    spyOn(window.localStorage, 'getItem');
    
    component.exibirFavoritos();
    
    expect(window.localStorage.getItem).toHaveBeenCalledWith('mockBancoDados');
    
  });
  
  it('deve chamar limpar LocalStorage', () => {
    spyOn(window.localStorage, 'getItem');

    component.limparLocalStorage;

    expect(component.receitas).toEqual([]);
    
  });
});
