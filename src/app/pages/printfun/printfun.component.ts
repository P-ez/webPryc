import { Component, OnInit } from '@angular/core';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

@Component({
  selector: 'app-printfun',
  templateUrl: './printfun.component.html',
  styleUrls: ['./printfun.component.scss']
})
export class PrintfunComponent implements OnInit {
  
  constructor() { 
  Swiper.use([Navigation,Pagination])
  }
  ngOnInit(): void {
  }

}
