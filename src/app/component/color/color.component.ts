import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/models/color';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  colors:Color[] = [];
  currentColor:Color;
  flag:boolean;
  constructor(private colorService:ColorService) { 
    this.flag=true;
  }

  ngOnInit(): void {
    this.getColors();
  }

  getColors(){
    return this.colorService.getColors().subscribe(response=>{
      this.colors = response.data
    })
  }

  getCurrentColorClass(color:Color){
    if(this.currentColor==color && this.flag==false)
    
      return "list-group-item active"
    else
       return "list-group-item"
  }
  setCurrentColor(color:Color){
    this.currentColor=color;
    this.flag=false;
  }

  setFlagTrue(){
    this.flag=true;
  }
  getAllColorClass(){
    if(this.flag==true)
      return "list-group-item active"
    else
       return "list-group-item"
  }
}
