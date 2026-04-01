import { Component } from '@angular/core';
import { ItemployesService } from 'src/app/services/itemployes.service';

@Component({
  selector: 'app-acountrs',
  templateUrl: './acountrs.component.html',
  styleUrls: ['./acountrs.component.css']
})
export class AcountrsComponent {


  itemp:any='';
    constructor(private itempserv:ItemployesService){
  this.getemployes();
    }
  
    getemployes(){
      this.itempserv.getitemployes().subscribe((resdata:any)=>{
        console.log(resdata);
        this.itemp=resdata;
      })
    }
}
