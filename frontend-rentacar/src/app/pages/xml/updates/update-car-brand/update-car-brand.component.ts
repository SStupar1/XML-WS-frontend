import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarBrandService } from 'src/app/services/car-brand.service';

@Component({
  selector: 'app-update-car-brand',
  templateUrl: './update-car-brand.component.html',
  styleUrls: ['./update-car-brand.component.css']
})
export class UpdateCarBrandComponent implements OnInit {

  private id : any;
  validateForm: FormGroup

  constructor(private route: ActivatedRoute, private cbService: CarBrandService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.setupForm();
    this.getDetails();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]],
      country: [null, [Validators.required]],
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.cbService.getCarBrand(this.id).subscribe(data =>{
      const formValues = {
        name: data.name,
        country: data.country
      }
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
    this.cbService.updateCarBrand(this.id, this.validateForm.value).subscribe(data => {
      this.router.navigateByUrl(`dashboard/lists/car-brands`);
    }, error => {
      alert('Error');
    })
  }

}
