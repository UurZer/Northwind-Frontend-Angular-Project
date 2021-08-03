import { CarComponent } from './component/car/car.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"",pathMatch:"full", component:CarComponent},
  {path:"cars",pathMatch:"full", component:CarComponent},
  {path:"cars/brand/:brandid",component:CarComponent},
  {path:"cars/color/:colorid",component:CarComponent},
  {path:"cars/cardetail/:carid",component:CarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
