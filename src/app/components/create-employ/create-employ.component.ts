import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployesService } from 'src/app/services/employes.service';

@Component({
  selector: 'app-create-employ',
  templateUrl: './create-employ.component.html',
  styleUrls: ['./create-employ.component.css']
})
export class CreateEmployComponent {

  updateemp: string = '';

  constructor(
    private emiservice: EmployesService,
    private routeremp: Router,
    private actemploye: ActivatedRoute
  ) {

    // ✅ WorkMode dynamic validation
    this.empform.get('workMode')?.valueChanges.subscribe((mode: any) => {

      if (mode === 'workFromOffice') {
        this.empform.get('travelFee')?.setValidators([
          Validators.required,
          Validators.min(10000),
          Validators.max(99999)
        ]);
        this.empform.get('wifiBill')?.clearValidators();
        this.empform.get('wifiBill')?.setValue('');
      }

      if (mode === 'remote') {
        this.empform.get('wifiBill')?.setValidators([
          Validators.required,
          Validators.min(10000),
          Validators.max(99999)
        ]);
        this.empform.get('travelFee')?.clearValidators();
        this.empform.get('travelFee')?.setValue('');
      }

      this.empform.get('travelFee')?.updateValueAndValidity();
      this.empform.get('wifiBill')?.updateValueAndValidity();
    });

    // ✅ Edit mode
    this.actemploye.params.subscribe((params: any) => {
      this.updateemp = params.id;

      if (this.updateemp) {
        this.emiservice.getAllEmploye(this.updateemp).subscribe((data: any) => {
          this.empform.patchValue(data);
        });
      }
    });
  }

  // ✅ FORM
  empform: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    dob: new FormControl('', Validators.required),
    role: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]),
    package: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    company: new FormControl('', Validators.required),

    address: new FormGroup({
      addressLine: new FormControl('', Validators.required),
      state: new FormControl('', Validators.required),
      pincode: new FormControl('', [Validators.required, Validators.min(100000), Validators.max(999999)]),
      city: new FormControl('', Validators.required)
    }),

    workMode: new FormControl('', Validators.required),

    // ✅ Important fix
    travelFee: new FormControl(''),
    wifiBill: new FormControl(''),

    hikes: new FormArray([])
  });

  get hikesarry() {
    return this.empform.get('hikes') as FormArray;
  }

  addHike() {
    this.hikesarry.push(
      new FormGroup({
        year: new FormControl('', Validators.required),
        hikepercentage: new FormControl('', Validators.required)
      })
    );
  }

  removeHike(i: number) {
    this.hikesarry.removeAt(i);
  }

  submit() {

    if (this.empform.invalid) {
      this.empform.markAllAsTouched();
      alert('Please fill all required fields correctly');
      console.log(this.empform);
      return;
    }

    if (this.updateemp) {
      this.emiservice.editeemp(this.updateemp, this.empform.value).subscribe(() => {
        alert('Employee Updated Successfully');
        this.routeremp.navigateByUrl('/dashbord/allemployes');
      });
    } else {
      this.emiservice.postemp(this.empform.value).subscribe(() => {
        alert('Employee Created Successfully');
        this.routeremp.navigateByUrl('/dashbord/allemployes');
      });
    }
  }
}