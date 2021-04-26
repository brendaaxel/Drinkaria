import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceitaDetalheComponent } from './receita-detalhe.component';

describe('ReceitaDetalheComponent', () => {
  let component: ReceitaDetalheComponent;
  let fixture: ComponentFixture<ReceitaDetalheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceitaDetalheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceitaDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
