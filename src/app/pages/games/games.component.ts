import { Component, OnInit,  } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

imagen = "assets/images/bckg_parn.jpg";
imagen2 = "assets/images/game.svg";
  constructor() {
    Swiper.use([Navigation,Pagination])
   }

  ngOnInit(): void {
  }

}
