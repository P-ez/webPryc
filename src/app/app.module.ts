import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LayoutModule } from '@angular/cdk/layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { GridComponent } from './components/grid/grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { MediaSectionComponent } from './components/media-section/media-section.component';
import { GamesComponent } from './pages/games/games.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { GameSwiperComponent } from './components/game-swiper/game-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ModalComponent } from './components/modal/modal.component';
import { PrintfunComponent } from './pages/printfun/printfun.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    GridComponent,
    FooterComponent,
    MediaSectionComponent,
    GamesComponent,
    ParentsComponent,
    GameSwiperComponent,
    ModalComponent,
    PrintfunComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    SwiperModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
