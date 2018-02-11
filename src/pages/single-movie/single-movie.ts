import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-single-movie',
  templateUrl: 'single-movie.html',
})
export class SingleMoviePage {
  movie
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.movie = navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SingleMoviePage');
  }

}
