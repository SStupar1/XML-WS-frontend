import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CarClassService } from 'src/app/services/car-class.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-car-class',
  templateUrl: './add-car-class.component.html',
  styleUrls: ['./add-car-class.component.css']
})
export class AddCarClassComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private ccService: CarClassService, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
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
      name: this.validateForm.value.name
    }
    console.log(body);
    this.ccService.createCarClass(body).subscribe(data => {
      alert('Uspesno ste napravili klasu!');
      this.router.navigateByUrl(`dashboard/lists/car-classes`);
  }, error => {
    alert('Error');
  })

  }

}
