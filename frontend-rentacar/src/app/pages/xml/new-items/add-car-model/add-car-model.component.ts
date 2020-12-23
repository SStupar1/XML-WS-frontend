import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CarModelService } from 'src/app/services/car-model.service';
import { Router } from '@angular/router';
import { CarClassService } from 'src/app/services/car-class.service';
import { CarBrandService } from 'src/app/services/car-brand.service';

@Component({
  selector: 'app-add-car-model',
  templateUrl: './add-car-model.component.html',
  styleUrls: ['./add-car-model.component.css']
})
export class AddCarModelComponent implements OnInit {

  validateForm!: FormGroup;
  public carClasses = [];
  public carBrands = [];
  public carClassId : any;
  public carBrandId : any;


  constructor(private fb: FormBuilder, private datePipe: DatePipe, private cmService: CarModelService, private router: Router, private ccService: CarClassService, private cbService: CarBrandService) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]]
    });
    this.getAllCarClasses();
    this.getAllCarBrands();
  }
  //GET ALL CAR CLASSES
  private getAllCarClasses(){
    this.ccService.getAllCarClasses().subscribe(data => {
      this.carClasses = data;
    }, error => {
     alert('Error');
    })
  }
  //GET ALL CAR BRANDS
  private getAllCarBrands(){
    this.cbService.getAllCarBrands().subscribe(data => {
      this.carBrands = data;
    }, error => {
     alert('Error');
    })
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
      carClassId: this.carClassId,
      carBrandId: this.carBrandId
    }
    console.log(body);
    this.cmService.createCarModel(body).subscribe(data => {
      alert('Uspesno ste napravili model!');
      this.router.navigateByUrl(`dashboard/lists/car-models`);
  }, error => {
    alert('Error');
  })

  }

  changeSelectCarClass(e){
    //id of selected carClass = e.target.value
    this.carClassId = e.target.value;
  }

  changeSelectCarBrand(e){
    //id of selected carClass = e.target.value
    this.carBrandId = e.target.value;
  }

}
