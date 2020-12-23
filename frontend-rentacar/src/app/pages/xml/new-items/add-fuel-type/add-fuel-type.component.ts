import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FuelTypeService } from 'src/app/services/fuel-type.service';

@Component({
  selector: 'app-add-fuel-type',
  templateUrl: './add-fuel-type.component.html',
  styleUrls: ['./add-fuel-type.component.css']
})
export class AddFuelTypeComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private ftService: FuelTypeService, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      type: [null, [Validators.required]],
      tankCapacity: [null, [Validators.required]],

    });
  }

  submitForm(): void {
    //VALIDATE
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    //REQUEST
    const body = {
      type: this.validateForm.value.type,
      tankCapacity: this.validateForm.value.tankCapacity,
    }
    console.log(body);
    this.ftService.createFuelType(body).subscribe(data => {
      alert('Uspesno ste napravili fuel type!');
      this.router.navigateByUrl(`dashboard/lists/fuel-types`);
  }, error => {
    alert('Error');
  })

  }


}
