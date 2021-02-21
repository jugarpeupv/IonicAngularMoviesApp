import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import * as homeDetailPage from './movie-detail.page';

const routes: Routes = [
  {
    path: '',
    component: homeDetailPage.MovieDetailPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieDetailPageRoutingModule { }
