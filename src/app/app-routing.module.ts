import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./movies/avatar/avatar.module').then( m => m.AvatarPageModule)
  },
  {
    path: 'adao-negro',
    loadChildren: () => import('./movies/adao-negro/adao-negro.module').then( m => m.AdaoNegroPageModule)
  },
  {
    path: 'dados-movies',
    loadChildren: () => import('./dados-movies/dados-movies.module').then( m => m.DadosMoviesPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
