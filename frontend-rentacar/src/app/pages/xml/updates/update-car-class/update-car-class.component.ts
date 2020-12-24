import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarClassService } from 'src/app/services/car-class.service';

@Component({
  selector: 'app-update-car-class',
  templateUrl: './update-car-class.component.html',
  styleUrls: ['./update-car-class.component.css']
})
export class UpdateCarClassComponent implements OnInit {

  private id : any;
  validateForm: FormGroup

  constructor(private route: ActivatedRoute, private ccService: CarClassService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.setupForm();
    this.getDetails();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]]
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.ccService.getCarClass(this.id).subscribe(data =>{
      const formValues = {
        name: data.name
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    this.ccService.updateCarClass(this.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`dashboard/lists/car-classes`);
    }, error => {
      alert('Error');
    })
    
   console.log(this.validateForm.value);
    
  }

}
