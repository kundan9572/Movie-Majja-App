import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  name: string = '';
  mGeneres: any;
  data: any;
  upComingMovie: any;
  trending: any;
  show: any;
  location: any = ['Patna', 'Ranchi', 'Lucknow', 'Noida', 'Goa'];

  constructor(private generateapi: MovieService, private router: Router) { }
  

  

  ngOnInit(): void {
   this.test();
  //  this.test2();
   this.search(name);
  }
  

  btnClick = function () {
    this.router.navigateByUrl('/showmovie');
  };

  test() {
    this.generateapi.getGenres().subscribe(data => { 
      this.mGeneres = data.genres;
      console.log("Local Generes", this.mGeneres)
     })
  }

  search(name: string) {
    this.generateapi.searchMovie(name).subscribe(data => {
     // this.show = data.results;
      console.log("Search Movie", this.show)
    })
  }
}
