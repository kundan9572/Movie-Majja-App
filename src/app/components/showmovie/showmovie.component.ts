import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HomeComponent } from '../home/home.component';
import {  HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-showmovie',
  templateUrl: './showmovie.component.html',
  styleUrls: ['./showmovie.component.css']
})
export class ShowmovieComponent implements OnInit {

  name: string = '';
  mGeneres: any;
  data: any;
  upComingMovie: any;
  trending: any;
  show: any;
  location: any = ['Patna', 'Ranchi', 'Lucknow', 'Noida', 'Goa'];

  constructor(private generateapi: MovieService) { }

  

  ngOnInit(): void {
    this.test();
    this.test1();
    this.test2();
   // this.search(name);
  }

  test() {
    this.generateapi.getGenres().subscribe(data => { 
      this.mGeneres = data.genres;
      console.log("Local Generes", this.mGeneres)
     })
  }
  

  test1() {
    this.generateapi.getUpcoming().subscribe(data => {
      this.upComingMovie = data.results;
      console.log("Upcoming Movie", this.upComingMovie)
     })
        //  this.upComingMovie= this.generateapi.getUpcoming()
        //  console.log("test",this.upComingMovie)
  }
  
  test2() {
    this.generateapi.getTrending().subscribe(data => {
      this.trending = data.results;
      console.log("Trending Movie", this.trending)
    })
  }

  search(name: string) {
    this.generateapi.searchMovie(name).subscribe(data => {
     // this.show = data.results;
      console.log("Search Movie", this.show)
    })
  }

}
