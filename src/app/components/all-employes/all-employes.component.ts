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

}
