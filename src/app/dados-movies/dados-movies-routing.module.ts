import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosMoviesPage } from './dados-movies.page';

const routes: Routes = [
  {
    path: '',
    component: DadosMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosMoviesPageRoutingModule {}
