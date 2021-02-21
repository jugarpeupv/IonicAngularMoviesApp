import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MoviesPage } from './movies.page';

import { MoviesPageRoutingModule } from './movies-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviesPageRoutingModule
  ],
  declarations: [MoviesPage]
})
export class MoviesPageModule { }
