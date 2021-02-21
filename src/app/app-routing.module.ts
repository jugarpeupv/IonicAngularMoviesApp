import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', loadChildren: () => import('./movies-info/movies.module').then(m => m.MoviesPageModule),
  },
  {
    path: 'movie-detail',
    children: [
      {
        path: ':movieDetailId',
        loadChildren: () => import('./movies-info/movie-detail/movie-detail.module').then(m => m.MovieDetailPageModule),
      },
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
