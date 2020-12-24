import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { CarModelService } from 'src/app/services/car-model.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarClassService } from 'src/app/services/car-class.service';
import { CarBrandService } from 'src/app/services/car-brand.service';
@Component({
  selector: 'app-update-car-model',
  templateUrl: './update-car-model.component.html',
  styleUrls: ['./update-car-model.component.css']
})
export class UpdateCarModelComponent implements OnInit {

  
  validateForm : FormGroup;
  public carClasses = [];
  public carBrands = [];
  public carClassId : any;
  public carBrandId : any;
  private id : any;


  constructor(private route: ActivatedRoute, private fb: FormBuilder, private datePipe: DatePipe, private cmService: CarModelService, private router: Router, private ccService: CarClassService, private cbService: CarBrandService) {}

  ngOnInit(): void {
    this.setupForm();
    this.getDetails();
    this.getAllCarClasses();
    this.getAllCarBrands();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      name: [null, [Validators.required]]
    });
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.cmService.getCarModel(this.id).subscribe(data =>{
      const formValues = {
        name: data.name
      }
      this.carBrandId = data.carBrandId;
      this.carClassId = data.carClassId;
      this.validateForm.setValue(formValues);
    })
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
    console.log(this.validateForm.value);
    console.log("id od modela primam" + this.id);
    //REQUEST
    const body = {
      name: this.validateForm.value.name,
      carClassId: this.carClassId,
      carBrandId: this.carBrandId
    }
    console.log(body);
    this.cmService.updateCarModel(this.id, body).subscribe(data => {
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
