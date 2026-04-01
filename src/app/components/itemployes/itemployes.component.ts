import { Component } from '@angular/core';
import { ItemployesService } from 'src/app/services/itemployes.service';

@Component({
  selector: 'app-itemployes',
  templateUrl: './itemployes.component.html',
  styleUrls: ['./itemployes.component.css']
})
export class ItemployesComponent {

itemp:any='';
  constructor(private itempserv:ItemployesService){

  }

  getemployes(){
    this.itempserv.getitemployes().subscribe((resdata:any)=>{
      console.log(resdata);
      this.itemp=resdata;
    })
  }
}
