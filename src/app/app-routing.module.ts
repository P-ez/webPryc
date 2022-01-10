import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundError } from 'rxjs';
import { GamesComponent } from './pages/games/games.component';
import { ParentsComponent } from './pages/parents/parents.component';
import { PrintfunComponent } from './pages/printfun/printfun.component';

const routes: Routes = [
  
  {path:'',component:HomeComponent },
  {path:'pages/games',component:GamesComponent },
  {path:'pages/parents',component:ParentsComponent },
  {path:'pages/printfun',component:PrintfunComponent },
  {path:'**',component:NotFoundError },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
