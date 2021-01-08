import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { CarModelService } from 'src/app/services/car-model.service';
import { FuelTypeService } from 'src/app/services/fuel-type.service';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';
import {formatDate} from '@angular/common';
import { AdService } from 'src/app/services/ad.service';



@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {

  private user: any;
  public carModels = [];
  public carModelId : any;
  public fuelTypes = [];
  public fuelTypeId : any;
  public gearshiftTypes = [];
  public gearshiftTypeId : any;
  private limitedDistance : boolean = true; 
  validateForm!: FormGroup;
  //CDW stavljam na false kada se kreira oglas(njega bira korisnik i u zavisnosti od toga se menja cena)
  private cdw : boolean = false;
  private simpleUser: boolean =false;





  constructor(private adService: AdService,private fb: FormBuilder, private cmService: CarModelService, private ftService: FuelTypeService, private gtService: GearshiftTypeService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getCarModels();
    this.getFuelTypes();
    this.getGearshiftTypes();
    this.validateForm = this.fb.group({
      kmTraveled: [null, [Validators.required]],
      limitedKm: [null, [Validators.required]],
      seats: [null, [Validators.required]]
    });
  }
 
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getCarModels(): void {
    this.cmService.getAllCarModels().subscribe(data => {
      this.carModels = data;
    }, error => {
      alert("Error");
    })
  }
  private getFuelTypes(): void {
    this.ftService.getAllFuelTypes().subscribe(data => {
      this.fuelTypes = data;
    }, error => {
      alert("Error");
    })
  }
  private getGearshiftTypes(): void {
    this.gtService.getAllGearshiftTypes().subscribe(data => {
      this.gearshiftTypes = data;
    }, error => {
      alert("Error");
    })
  }

  changeSelectFuelType(e){
    this.fuelTypeId = e.target.value;
  }

  changeSelectCarModel(e){
    this.carModelId = e.target.value;
  }

  changeSelectGearshiftType(e){
    this.gearshiftTypeId = e.target.value;
  }

  submitForm(): void {
    //VALIDATE
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    if(this.validateForm.value.kmTraveled == 0){
      this.limitedDistance = false;
    }

    if(this.user.userRole == 'SIMPLE_USER'){
      this.simpleUser = true;
    }else{
      this.simpleUser = false;
    }
    
    const body = {
      publisherId: this.user.id,
      carModelId: this.carModelId,
      fuelTypeId: this.fuelTypeId,
      gearshiftTypeId: this.gearshiftTypeId,
      kmTraveled: this.validateForm.value.kmTraveled,
      limitedDistance: this.limitedDistance,
      limitedKm: this.validateForm.value.limitedKm,
      cdw: this.cdw,
      seats: this.validateForm.value.seats,
      creationDate: formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      simpleUser: this.simpleUser
    }
    console.log(body);

    this.adService.createAd(body).subscribe(data => {
      alert("Created! ");
    }, error => {
      alert("Error");
    })

  }
}
