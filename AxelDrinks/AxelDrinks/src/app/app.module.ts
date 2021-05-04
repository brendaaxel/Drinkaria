import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navegacao/header/header.component';
import { ReceitasComponent } from './receitas/receitas/receitas.component';

import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ReceitasService } from './receitas/service/receitas.service';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReceitaDetalhesComponent } from './receitas/receita-detalhes/receita-detalhes.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { FavoritosComponent } from './receitas/favoritos/favoritos.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceitasComponent,
    FooterComponent,
    ReceitaDetalhesComponent,
    FavoritosComponent
  
  ],
  imports: [

    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: false}),
    HttpClientModule,
    CommonModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatSliderModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatProgressSpinnerModule


  ],
  providers: [
    ReceitasService,
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }