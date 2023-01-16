import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, catchError} from 'rxjs/operators';
import { IListMovies } from '../models/IMoviesAPI.model';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  lingua = 'pt-BR';
  regiao = 'BR';

  private apiURL = 'https://api.themoviedb.org/3/';
  private key = '?api_key=63da1ad7bb73137a18ef5b6cec064679';

  constructor(private http: HttpClient, public toastController: ToastController) { }

  buscarMovies(busca: string): Observable<IListMovies>{
    const url = `${this.apiURL}search/movie${this.key}&language=${this.lingua}&region=${this.regiao}&query=${busca}`;

    return this.http.get<IListMovies>(url).pipe(
      map(retorno => retorno),
      catchError(erro => this.exibirErro(erro))
    );
  }

  async exibirErro(erro) {
    const toast = await this.toastController.create({
      message: 'Erro ao consultar API!',
      duration: 2000,
      color: 'danger',
      position: 'middle',
    });
    toast.present();
    return null;
  }
}
