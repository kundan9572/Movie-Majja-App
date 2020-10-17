import { Component, OnInit } from '@angular/core';

import { MovieService } from '../../services/movie.service';
import { HomeComponent } from '../home/home.component';
import {  HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.css']
})
export class NowplayingComponent implements OnInit {

  nowplaying: any;
  constructor( private generateapi: MovieService) { }

  ngOnInit(): void {
    this.nowPlaying();
  }


  nowPlaying() {
    this.generateapi.getNowPlaying().subscribe(data => {
      this.nowplaying = data.results;
      console.log("Trending Movie", this.nowplaying)
    })
  }
}
