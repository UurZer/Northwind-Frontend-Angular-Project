import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/car-detail';
import { CarDetailResponseModel } from '../models/car-detailResponseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {
  apiUrl="https://localhost:44302/api"
  constructor(private httpClient: HttpClient) { }

  getCarDetail(carId:number):Observable<ListResponseModel<CarDetail>> {
    let newPath=this.apiUrl+"/CarImages/getcardetails?carId="+carId
    console.log(carId);
     return this.httpClient.get<ListResponseModel<CarDetail>>(newPath)
  }
}
