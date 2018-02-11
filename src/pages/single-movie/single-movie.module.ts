import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingleMoviePage } from './single-movie';

@NgModule({
  declarations: [
    SingleMoviePage,
  ],
  imports: [
    IonicPageModule.forChild(SingleMoviePage),
  ],
})
export class SingleMoviePageModule {}