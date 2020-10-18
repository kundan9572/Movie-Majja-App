import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IndexComponent } from '../components/index/index.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apikey= 'fa59d4710668e13f055249f9968d3fad';
  exampleapirequest = "https://api.themoviedb.org/3/movie/550?api_key=fa59d4710668e13f055249f9968d3fad";

  private data: any;
  url = "https://api.themoviedb.org/3/genre/movie/list?api_key=fa59d4710668e13f055249f9968d3fad&language=en-US";
  url1 = "https://api.themoviedb.org/3/movie/upcoming?api_key=fa59d4710668e13f055249f9968d3fad&language=en-US&page=1";
  url2 = "https://api.themoviedb.org/3/trending/movie/day?api_key=fa59d4710668e13f055249f9968d3fad";
  urlSearch = "https://api.themoviedb.org/3/search/movie?api_key=fa59d4710668e13f055249f9968d3fad&language=en-US&query=avengers&page=1&include_adult=false";
  urlNowPlaying = "https://api.themoviedb.org/3/movie/now_playing?api_key=fa59d4710668e13f055249f9968d3fad&language=en-US&page=1";
  urlPopular = "https://api.themoviedb.org/3/movie/popular?api_key=fa59d4710668e13f055249f9968d3fad&language=en-US&page=1";
  urlTopRated = "https://api.themoviedb.org/3/movie/top_rated?api_key=fa59d4710668e13f055249f9968d3fad&language=en-US&page=1";

  baseurl = "https://api.themoviedb.org/3/search/movie?api_key=fa59d4710668e13f055249f9968d3fad&language=en-US&query=";

  constructor(private http:HttpClient ) { }

  getGenres(): any {
    return this.http.get(this.url);
    
  }

  getUpcoming(): any{
    return this.http.get(this.url1)
  }

  getTrending(): any{
    return this.http.get(this.url2)
  }


   getNowPlaying(): any{
    return this.http.get(this.urlNowPlaying)
  } 

  getPopular(): any{
    return this.http.get(this.urlPopular)
  }

  searchMovie(name) {
    return this.http.get(this.baseurl + name + "&page=1&include_adult=false");
  }
}
