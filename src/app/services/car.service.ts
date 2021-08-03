import { ListResponseModel } from './../models/listResponseModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarResponseModel } from '../models/carResponseModel';
import { Car } from '../models/car';
import {CarDetail} from '../models/car-detail'
@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl="https://localhost:44302/api"
  constructor(private httpClient: HttpClient) { }

  getCars(): Observable<ListResponseModel<Car>>{
    let newPath=this.apiUrl+"/cars/getcardetails"
    return this.httpClient.get<ListResponseModel<Car>>(newPath);
  }

  getCarsByBrand(brandId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"/cars/getcarsbybrand?brandId="+brandId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }

  getCarsByColor(colorId:number):Observable<ListResponseModel<Car>>{
    let newPath =this.apiUrl+"/cars/getcarsbycolor?colorId="+colorId
    return this.httpClient.get<ListResponseModel<Car>>(newPath)
  }
  
  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>>{
    let newPath=this.apiUrl+"/CarImages/getcardetails?carId="+carId
     return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}

