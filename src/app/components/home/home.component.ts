import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mGeneres: any;
  data: any;
  upComingMovie: any;
  trending: any;
  show: any;

    
  constructor(private generateapi: MovieService) {
    console.log('app comonent is working')
  }

  ngOnInit(): void {
  }
    
   test() {
         this.mGeneres= this.generateapi.getGenres()
         console.log("test",this.mGeneres)
   }
  
  test1() {
         this.upComingMovie= this.generateapi.getUpcoming()
         console.log("test",this.upComingMovie)
  }
  
  test2() {
    
  this.trending = this.generateapi.getTrending()
  console.log("test",this.trending)
  }


}
