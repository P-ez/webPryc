import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-game-swiper',
  templateUrl: './game-swiper.component.html',
  styleUrls: ['./game-swiper.component.scss']
})
export class GameSwiperComponent implements OnInit {
  imagen2 = "assets/images/game.svg";
  imagen = "assets/images/bckg_parn.jpg";
  constructor() { }
  
  ngOnInit(): void {
  }
}
