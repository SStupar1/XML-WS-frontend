import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CarBrandService } from 'src/app/services/car-brand.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car-brand',
  templateUrl: './add-car-brand.component.html',
  styleUrls: ['./add-car-brand.component.css']
})
export class AddCarBrandComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private cbService: CarBrandService, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      country: [null, [Validators.required]],

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
      name: this.validateForm.value.name,
      country: this.validateForm.value.country,
    }
    console.log(body);
    this.cbService.createCarBrand(body).subscribe(data => {
      alert('Uspesno ste napravili brend!');
      this.router.navigateByUrl(`dashboard/lists/car-brands`);
  }, error => {
    alert('Error');
  })

  }

}
