import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';

@Component({
  selector: 'app-add-gearshift-type',
  templateUrl: './add-gearshift-type.component.html',
  styleUrls: ['./add-gearshift-type.component.css']
})
export class AddGearshiftTypeComponent implements OnInit {

  validateForm!: FormGroup;

  constructor(private fb: FormBuilder, private datePipe: DatePipe, private gtService: GearshiftTypeService, private router: Router) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      type: [null, [Validators.required]],
      numberOfGears: [null, [Validators.required]],

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
      numberOfGears: this.validateForm.value.numberOfGears,
    }
    console.log(body);
    this.gtService.createGearshiftType(body).subscribe(data => {
      alert('Uspesno ste napravili gearshift!');
      this.router.navigateByUrl(`dashboard/lists/gearshift-types`);
  }, error => {
    alert('Error');
  })

  }

}
