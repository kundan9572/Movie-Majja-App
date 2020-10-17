import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HomeComponent } from '../home/home.component';
import {  HeaderComponent } from '../../layout/header/header.component';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {

    trending: any;

  
  constructor( private generateapi: MovieService) { }

  ngOnInit(): void {
        this.test2();

  }

   test2() {
    this.generateapi.getTrending().subscribe(data => {
      this.trending = data.results;
      console.log("Trending Movie", this.trending)
    })
  }

}
