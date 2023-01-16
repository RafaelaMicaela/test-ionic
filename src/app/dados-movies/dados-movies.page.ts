import { IMovie } from './../models/IMovie.model';
import { DadosService } from './../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dados-movies',
  templateUrl: './dados-movies.page.html',
  styleUrls: ['./dados-movies.page.scss'],
})
export class DadosMoviesPage implements OnInit {

  movie!: IMovie;

  constructor(public dadosService: DadosService ) { }

  ngOnInit() {
    this.movie = this.dadosService.pegarDados('movie');
    console.log('Filme Enviado', this.movie);
  }

}

