import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { BrandService } from 'src/app/services/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {
  brands:Brand[] = [];
  flag:boolean
  currentBrand:Brand
  constructor(private brandService: BrandService ) { 
    this.flag=true;
  }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response=>{
      this.brands=response.data
    })
  }

  setFlagTrue(){
    this.flag=true;
  }

  getCurrentBrandClass(brand:Brand){
    if(this.currentBrand==brand && this.flag==false){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
  setCurrentBrand(brand:Brand){
    this.currentBrand=brand;
    this.flag=false;
  }
  getAllBrandClass(){
    if(this.flag){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }
}
