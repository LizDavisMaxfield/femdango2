import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoviesDataProvider } from '../../providers/movies-data/movies-data';
import { SingleMoviePage } from '../../pages/single-movie/single-movie';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  categories;

  constructor(public navCtrl: NavController, public moviesData: MoviesDataProvider) {
    moviesData.getMovies().subscribe(data => {
      this.categories = data;
      console.log(this.categories)
    })
  }

  goToMoviePage(movie) {
    this.navCtrl.push(SingleMoviePage, {movie: movie})
  }

}
