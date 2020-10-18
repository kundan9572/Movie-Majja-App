import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { HomeComponent } from '../home/home.component';
import { HeaderComponent } from '../../layout/header/header.component';
import { Router } from '@angular/router';
import { ShowmovieComponent} from '../showmovie/showmovie.component';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {


  constructor(private generateapi: MovieService, private router: Router) { }

  ngOnInit(): void {
   
  }

  btnClick = function () {
    this.router.navigateByUrl('/showmovie');
  };

  btnClick1 = function () {
    this.router.navigateByUrl('/trending');
  };

  btnClick2 = function () {
    this.router.navigateByUrl('/popular');
  };

}
