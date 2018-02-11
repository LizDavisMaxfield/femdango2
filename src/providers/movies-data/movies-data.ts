//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
/*
  Generated class for the MoviesDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoviesDataProvider {
  categories;
  constructor() {
    console.log('Hello MoviesDataProvider Provider');
  }

  getMovies() {
    if (!this.categories){
      this.categories = [
        {
          title: "My Favorites", 
          movies: [
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 1,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 2,
              lampRating: "warning"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 3,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 4,
              lampRating: "danger"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 5,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 6,
              lampRating: "warning"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 7,
              lampRating: "success"
            },
          ]
        },
        {
          title: "In Theaters", 
          movies: [
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 1,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 2,
              lampRating: "danger"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 3,
              lampRating: "warning"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 4,
              lampRating: "success"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 5,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 6,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 7,
              lampRating: "success"
            },
          ]
        },
        {
          title: "LampTest Favorites", 
          movies: [
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 1,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 2,
              lampRating: "success"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 3,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 4,
              lampRating: "success"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 5,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 6,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 7,
              lampRating: "success"
            },
          ]
        },
        {
          title: "Comedy", 
          movies: [
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 1,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 2,
              lampRating: "success"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 3,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 4,
              lampRating: "success"
            },
            {
              img: "assets/imgs/ghostbusters.jpg",
              title: "Ghostbusters",
              id: 5,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 6,
              lampRating: "success"
            },
            {
              img: "assets/imgs/moonlight.jpg",
              title: "Moonlight",
              id: 7,
              lampRating: "success"
            },
          ]
        }
      ]
    }
    return Observable.create(observer => {
      observer.next(this.categories);
      observer.complete();
    })
  }

}
