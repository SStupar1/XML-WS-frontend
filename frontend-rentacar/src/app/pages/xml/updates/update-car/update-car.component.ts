import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CarModelService } from 'src/app/services/car-model.service';
import { CarService } from 'src/app/services/car.service';
import { FuelTypeService } from 'src/app/services/fuel-type.service';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';

@Component({
  selector: 'app-update-car',
  templateUrl: './update-car.component.html',
  styleUrls: ['./update-car.component.css']
})
export class UpdateCarComponent implements OnInit {
  
  validateForm : FormGroup;
  public fuelTypeId : any;
  public gearshiftId: any;
  public gearshiftTypes = [];
  private id : any;
  public fuelTypes = [];
  
  constructor(private route: ActivatedRoute,private gtService: GearshiftTypeService, private fb: FormBuilder,private ftService: FuelTypeService,  private datePipe: DatePipe, private carService: CarService, private router: Router) { }

  ngOnInit(): void {
    this.setupForm();
    this.getDetails();
    this.getAllFuelTypes();
    this.getAllGearshiftTypes();
  }

  public setupForm(): void {
    this.validateForm = this.fb.group({
      fuelTypeId: [null, [Validators.required]],
      gearshiftId: [null, [Validators.required]]
    });
  }


  private getAllFuelTypes(){
    this.ftService.getAllFuelTypes().subscribe(data => {
      this.fuelTypes = data;
    }, error => {
     alert('Error');
    })
  }

  private getAllGearshiftTypes(){
    this.gtService.getAllGearshiftTypes().subscribe(data => {
      this.gearshiftTypes = data;
    }, error => {
     alert('Error');
    })
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.carService.getCar(this.id).subscribe(data =>{
      const formValues = {
        fuelTypeId: data.fuelTypeId,
        gearshiftId: data.gearshiftTypeId
      }
     // this.fuelTypeId = data.fuelTypeId;
      this.validateForm.setValue(formValues);
    })
  }

  submitForm(): void {
   /* //REQUEST
    const body = {
      fuelTypeId: this.fuelTypeId,
      gearshiftTypeId: this.gearshiftId
    }
    this.carService.updateCar(this.id, body).subscribe(data => {
      this.router.navigateByUrl(`dashboard/lists/ads`);
    }, error => {
      alert('Error');
    })*/
  }

  changeSelectFuelType(e){
    //id of selected carClass = e.target.value
    this.fuelTypeId = e.target.value;
  }

  changeSelectGearshiftType(e){
    //id of selected carClass = e.target.value
    this.gearshiftId = e.target.value;
  }

}
