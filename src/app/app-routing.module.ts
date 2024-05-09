import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaEntradaComponent } from './pages/pagina-entrada/pagina-entrada.component';
import { CriarBaralhoComponent } from './pages/criar-baralho/criar-baralho.component';
import { VerBaralhosCriadosComponent } from './pages/ver-baralhos-criados/ver-baralhos-criados.component';
import { ListarBaralhosComponent } from './pages/listar-baralhos/listar-baralhos.component';
import { ListarCartasComponent } from './pages/listar-cartas/listar-cartas.component';
import { VerConjuntosComponent } from './pages/ver-conjuntos/ver-conjuntos.component';

const routes: Routes = [
  { path: '', redirectTo: '/entrada', pathMatch: 'full' },
  { path: 'entrada', component: PaginaEntradaComponent },
  { path: 'criar-baralho', component: CriarBaralhoComponent },
  { path: 'listar-baralho', component: ListarBaralhosComponent },
  { path: 'listar-cartas', component: ListarCartasComponent },
  { path: 'ver-baralhos-criados', component: VerBaralhosCriadosComponent },
  { path: 'ver-conjuntos', component: VerConjuntosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }