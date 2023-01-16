import { DadosService } from './../services/dados.service';
import { IMovie } from '../models/IMovie.model';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  isModalOpen = false;

  titulo = 'Movies';

  listMovies: IMovie[] = [
    {
      nome: 'Avatar: O Caminho da Água',
      lancamento: 'Dec 16, 2022',
      duracao: '3h 12m',
      nota: 7.6,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mbYQLLluS651W89jO7MOZcLSCUw.jpg',
      sinopse:
        '12 anos depois de explorar Pandora e se juntar aos Navi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre.',
      categorias: ['Ficção científica', 'Ação', 'Aventura'],
      pagina: '/avatar',
    },
    {
      nome: 'Adão Negro',
      lancamento: 'October 21, 2022',
      duracao: '2h 5m',
      nota: 7.2,
      cartaz:
        'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9z256FFPDsL7kSVJ9oyLELaN1ph.jpg',
      sinopse:
        'Quase 5.000 anos depois de ter sido concedido com os poderes onipotentes dos deuses egípcios - e de ter sido preso, - Adão Negro se ergue de seu túmulo, pronto para trazer sua justiça ao mundo moderno.',
      categorias: ['Fantasia', 'Ação', 'Ficção científica'],
      pagina: '/adao-negro',
    },
  ];

  constructor(public dadosService: DadosService, public route: Router) {}

  exibirMovie(movie: IMovie) {
    this.dadosService.guardarDados('movie', movie);
    this.route.navigateByUrl('/dados-movie');
  }
}
