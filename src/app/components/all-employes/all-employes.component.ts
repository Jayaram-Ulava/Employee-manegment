import { Component } from '@angular/core';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-all-employes',
  templateUrl: './all-employes.component.html',
  styleUrls: ['./all-employes.component.css']
})
export class AllEmployesComponent {

  
totleemployes:any='';
  constructor(private employesService: EmployesService) { }

  ngOnInit(): void {
    this.employesService.getAllEmployes().subscribe((resem:any)=>{
this.totleemployes=resem;
console.log(this.totleemployes);
    })
  }
searchemp:any='';
  search() {
this.employesService.searchEmployes(this.searchemp).subscribe((searchemp:any)=>{
  this.totleemployes=searchemp;
})
  }

isvisuble:boolean=false;
 colom:any='';
  order:any='';
  sortname(colom:any){
    this.colom=colom;
    this.isvisuble=!this.isvisuble;
    this.order=this.isvisuble? 'asc': 'desc';
    this.employesService.sortemploye(this.colom, this.order).subscribe((sortdata:any)=>{
      this.totleemployes=sortdata;
    })
  }

  emppage:number=0
  pageemp(page:any){
this.emppage=page;
this.employesService.pagenactionemp(this.emppage, 10).subscribe((pagedata:any)=>{
  this.totleemployes=pagedata;
})
  }

  pageprev() {
    this.emppage--;
    this.pageemp(this.emppage);
  }
  
  nextemp(){
    this.emppage++;
    this.pageemp(this.emppage);
  }

  deleteemp(id:any) {

    if(confirm('Are you sure you want to delete this employee?')) {
this.employesService.deleteemp(id).subscribe((deleteemp:any)=>{
  alert('Employee deleted successfully');
  location.reload();
})
    }
    else {
      alert('Employee deletion cancelled');
    }

  }

}
