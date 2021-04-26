import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './navegacao/header/header.component';
import { ReceitasComponent } from './receitas/receitas/receitas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './navegacao/footer/footer.component';
import { ReceitasService } from './receitas/service/receitas.service';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReceitaDetalheComponent } from './receita-detalhe/receita-detalhe.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReceitasComponent,
    FooterComponent,
    // ReceitaDetalheComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes, { useHash: false}),
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
    RouterModule


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