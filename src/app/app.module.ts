import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';


// carousel Module
//import { CarouselModule } from 'ngx-owl-carousel-o';

// Material
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
//import {MatChipsModule} from '@angular/material/chips';
//import { MatDatepickerModule } from '@angular/material/datepicker';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { IndexComponent } from './components/index/index.component';
import { ShowmovieComponent } from './components/showmovie/showmovie.component';
import { TrendingComponent } from './components/trending/trending.component';
import { NowplayingComponent } from './components/nowplaying/nowplaying.component';
import { PopularComponent } from './components/popular/popular.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BookticketComponent } from './components/bookticket/bookticket.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    IndexComponent,
    ShowmovieComponent,
    TrendingComponent,
    NowplayingComponent,
    PopularComponent,
    AboutusComponent,
    BookticketComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    FormsModule
  
  ],
  providers: [MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
