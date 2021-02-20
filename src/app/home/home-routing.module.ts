import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'home-detail',
    children:[
      {
        path: "",
        loadChildren: () => import('./home-detail/home-detail.module').then( m => m.HomeDetailPageModule)

      },
      {
        path: ":homeDetailId",
        loadChildren: ()=> import('./home-detail/home-detail.module').then(m=>m.HomeDetailPageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
