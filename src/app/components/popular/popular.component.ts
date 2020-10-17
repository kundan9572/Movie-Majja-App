import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HomeComponent } from '../home/home.component';
import {  HeaderComponent } from '../../layout/header/header.component';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.component.html',
  styleUrls: ['./popular.component.css']
})
export class PopularComponent implements OnInit {

  popular: any;
  constructor( private generateapi: MovieService) { }

  ngOnInit(): void {
    this.Popular();
  }

  Popular() {
    this.generateapi.getPopular().subscribe(data => {
      this.popular = data.results;
      console.log("Trending Movie", this.popular)
    })
  }
}
