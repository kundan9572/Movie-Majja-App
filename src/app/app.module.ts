import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';

// carousel Module
import { CarouselModule } from 'ngx-owl-carousel-o';

// Material
import {MatIconModule} from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
//import {MatChipsModule} from '@angular/material/chips';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { IndexComponent } from './components/index/index.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    IndexComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatIconModule,
    MatCardModule,
    CarouselModule,
    
  
  ],
  providers: [MovieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
