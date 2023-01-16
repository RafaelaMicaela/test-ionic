import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosMoviesPageRoutingModule } from './dados-movies-routing.module';

import { DadosMoviesPage } from './dados-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosMoviesPageRoutingModule
  ],
  declarations: [DadosMoviesPage]
})
export class DadosMoviesPageModule {}
