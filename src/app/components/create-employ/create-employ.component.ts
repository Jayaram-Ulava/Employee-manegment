import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-create-employ',
  templateUrl: './create-employ.component.html',
  styleUrls: ['./create-employ.component.css']
})
export class CreateEmployComponent {

  updateemp:string='';
  constructor(private emiservice:EmployesService, private routeremp:Router,private actemploye:ActivatedRoute){
    this.empform.get('workMode')?.valueChanges.subscribe((data:any)=>{
      if(data == 'workFromOffice'){
        this.empform.addControl('travelFee',new FormControl())
        this.empform.removeControl('wifiBill');

      } else if (data == 'remote'){
        this.empform.addControl('wifiBill',new FormControl())
        this.empform.removeControl('travelFee');

      }
    })
    actemploye.params.subscribe((empolyedatapa:any)=>{
this.updateemp=empolyedatapa.id;

    })
    emiservice.getAllEmploye(this.updateemp).subscribe((empiddata:any)=>{
this.empform.patchValue(empiddata);
    })

    
  }

  empform: FormGroup = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    dob: new FormControl(''),
    role: new FormControl(''),
    package: new FormControl(''),
    city: new FormControl(''),
    gender: new FormControl(''),
    company: new FormControl(''),
    address: new FormGroup({
       addressLine: new FormControl(''),
         state: new FormControl(''),
         pincode: new FormControl('') ,
         city:new FormControl('') 
    }),
    
    workMode: new FormControl(''),
    hikes: new FormArray([])

  })

  get hikesarry(){
    return this.empform.get('hikes') as FormArray
  }

  addHike() {
    this.hikesarry.push(
      new FormGroup({
        year: new FormControl(''),
        hikepercentage: new FormControl('')
      })
    )
  }

  removeHike(i:number) {
    this.hikesarry.removeAt(i);

  }
submit() {
  if(this.updateemp){
    this.emiservice.editeemp(this.updateemp, this.empform.value).subscribe((resdata:any)=>{
alert('Employee Updated Successfully');
this.empform.reset();
this.routeremp.navigateByUrl('/allemployes')
    })

  }

  this.emiservice.postemp(this.empform.value).subscribe((empdata:any)=>{
    alert('Employee Created Successfully');
    this.empform.reset();
    this.routeremp.navigateByUrl('/allemployes')
  })

}
}
