import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-view-empployes',
  templateUrl: './view-empployes.component.html',
  styleUrls: ['./view-empployes.component.css']
})
export class ViewEmpployesComponent {
empdisplyone:any='';
  displayemp:any={};
  constructor(private viewemployeservice:EmployesService, private viewactrou:ActivatedRoute){

    viewactrou.params.subscribe((viewdata:any)=>{
this.empdisplyone=viewdata.id;

  viewemployeservice.getAllEmploye(viewdata.id).subscribe((viewempdata:any)=>{
      this.displayemp=viewempdata;
      console.log(this.displayemp.name);
    })

    })

  
  }


}
