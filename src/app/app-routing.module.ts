import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BodyComponent} from './components/body/body.component';
import { IndexComponent} from './components/index/index.component';
import { HeaderComponent } from './layout/header/header.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { BookticketComponent } from './components/bookticket/bookticket.component';
import {NowplayingComponent } from './components/nowplaying/nowplaying.component';
import { PopularComponent } from './components/popular/popular.component';
import { ShowmovieComponent } from './components/showmovie/showmovie.component';
import {  TrendingComponent } from './components/trending/trending.component';
import { from } from 'rxjs';


const routes: Routes = [
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' },
  // { path: '', component: IndexComponent },
  { path: 'home', component: HomeComponent },
  { path: 'body', component: BodyComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: ' bookticket', component: BookticketComponent },
  { path: ' nowplaying', component: NowplayingComponent },
  { path: ' popular', component: PopularComponent },
  { path: ' showmovie', component: ShowmovieComponent },
  { path: ' trending', component: TrendingComponent }
            
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
