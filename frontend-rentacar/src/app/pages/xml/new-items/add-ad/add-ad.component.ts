import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { CarModelService } from 'src/app/services/car-model.service';
import { FuelTypeService } from 'src/app/services/fuel-type.service';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';
import {formatDate} from '@angular/common';
import { AdService } from 'src/app/services/ad.service';
import { NzUploadFile } from 'ng-zorro-antd/upload';
import { PricelistService } from 'src/app/services/pricelist.service';

function getBase64(file: File): Promise<string | ArrayBuffer | null> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}


@Component({
  selector: 'app-add-ad',
  templateUrl: './add-ad.component.html',
  styleUrls: ['./add-ad.component.css']
})
export class AddAdComponent implements OnInit {

  private user: any;
  public carModels = [];
  public selectedCarModel: any = null;
  public fuelTypes = [];
  public selectedFuelType: any = null;
  public gearshiftTypes = [];
  public selectedGearshiftType: any = null;
  public pricelists = [];
  public selectedPricelist: any = null;
  private limitedDistance : boolean = true; 
  validateForm!: FormGroup;
  //CDW stavljam na false kada se kreira oglas(njega bira korisnik i u zavisnosti od toga se menja cena)
  private cdw : boolean = false;
  private simpleUser: boolean =false;
  defaultFileList: NzUploadFile[] = [];
  fileList2 = [...this.defaultFileList];

  constructor(private adService: AdService,private fb: FormBuilder, private cmService: CarModelService,private pricelistService: PricelistService , private ftService: FuelTypeService, private gtService: GearshiftTypeService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getCarModels();
    this.getFuelTypes();
    this.getGearshiftTypes();
    this.getPricelists();
    this.validateForm = this.fb.group({
      kmTraveled: [null, [Validators.required]],
      limitedKm: [null, [Validators.required]],
      seats: [null, [Validators.required]]
    });
  }
 
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 


  private getPricelists(): void {
    this.pricelistService.getAllPricelists().subscribe(data => {
      this.pricelists = data;
    }, error => {
      alert("Error");
    })
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
    
    var formData = new FormData();
    this.fileList2.forEach(element => {
      formData.append('imageFile', element.originFileObj, element.originFileObj.name);
    });
    formData.append('request', new Blob([JSON.stringify({
      'publisherId': this.user.id,
      'carModelId': this.selectedCarModel,
      'fuelTypeId': this.selectedFuelType,
      'gearshiftTypeId': this.selectedGearshiftType,
      'kmTraveled': this.validateForm.value.kmTraveled,
      'limitedDistance': this.limitedDistance,
      'limitedKm': this.validateForm.value.limitedKm,
      'cdw': this.cdw,
      'seats': this.validateForm.value.seats,
      'creationDate': formatDate(new Date(), 'yyyy-MM-dd', 'en'),
      'simpleUser': this.simpleUser
    })], {
        type: "application/json"
    }));
    this.adService.createAd(formData).subscribe(data => {
      alert("Created! ");
    }, error => {
      alert("Error");
    })
  }

}
