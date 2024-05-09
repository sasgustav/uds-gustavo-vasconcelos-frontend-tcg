import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PaginaEntradaComponent } from './pages/pagina-entrada/pagina-entrada.component';
import { MenuNavegacaoComponent } from './shared/components/menu-navegacao/menu-navegacao.component';
import { CriarBaralhoComponent } from './pages/criar-baralho/criar-baralho.component';
import { ListarCartasComponent } from './pages/listar-cartas/listar-cartas.component';
import { ListarBaralhosComponent } from './pages/listar-baralhos/listar-baralhos.component';
import { VerBaralhosCriadosComponent } from './pages/ver-baralhos-criados/ver-baralhos-criados.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { GridCartasComponent } from './baralhos/grid-cartas/grid-cartas.component';
import { HttpClientModule } from '@angular/common/http';
import { MeusBaralhosComponent } from './baralhos/meus-baralhos/meus-baralhos.component';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { BackToTopComponent } from './shared/components/back-to-top/back-to-top.component';
import { ToolbarTopComponent } from './shared/components/toolbar-top/toolbar-top.component';

@NgModule({
  declarations: [
    AppComponent,
    BackToTopComponent,
    PaginaEntradaComponent,
    MenuNavegacaoComponent,
    CriarBaralhoComponent,
    ListarCartasComponent,
    ListarBaralhosComponent,
    VerBaralhosCriadosComponent,
    FooterComponent,
    GridCartasComponent,
    MeusBaralhosComponent,
    SpinnerComponent,
    BackToTopComponent,
    ToolbarTopComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
