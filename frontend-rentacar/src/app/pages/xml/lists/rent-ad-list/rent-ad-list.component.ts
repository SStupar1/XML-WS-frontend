import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import setHours from "date-fns/setHours";
import { DisabledTimeFn, DisabledTimePartial } from "ng-zorro-antd/date-picker";
import { AdService } from 'src/app/services/ad.service';
import { CarBrandService } from 'src/app/services/car-brand.service';
import { CarClassService } from 'src/app/services/car-class.service';
import { CarModelService } from 'src/app/services/car-model.service';
import { FuelTypeService } from 'src/app/services/fuel-type.service';
import { GearshiftTypeService } from 'src/app/services/gearshift-type.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-rent-ad-list',
  templateUrl: './rent-ad-list.component.html',
  styleUrls: ['./rent-ad-list.component.css']
})
export class RentAdListComponent implements OnInit {

  public ads = [];
  public cart = [];
  validateForm!: FormGroup;
  //dropdown fields
  public carModels = [];
  public carBrands = [];
  public carClasses = [];
  public fuelTypes = [];
  public gearshiftTypes = [];
  public selectedCarModel: any;
  public selectedCarBrand: any;
  public selectedCarClass: any;
  public selectedFuelType: any;
  public selectedGearshiftType: any;
  //dates
  public fromDateString : string = "";
  public toDateString : string = "";
  public fromTimeString: string = "";
  public toTimeString: string = "";
  public dateFrom : Date;
  public dateTo: Date;
  dates: any;
  today = new Date();
  timeDefaultValue = setHours(new Date(), 0);

  //app-ad-card tag kad pozivam nested ad-card
  constructor( private adService: AdService, private cmService: CarModelService, private cbService: CarBrandService,
    private ccService: CarClassService, private ftService: FuelTypeService, private gtService: GearshiftTypeService,
    private searchService: SearchService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.ads = [];
    this.setupCart();
    this.getAllAds();
    this.getCarBrands();
    this.getCarClasses();
    this.getCarModels();
    this.getFuelTypes();
    this.getGearshiftTypes();
    this.dates = {
      fromDateString : "",
      toDateString: "",
      fromTimeString: "",
      toTimeString: ""
    }
    this.validateForm = this.fb.group({
      address: ["", [Validators.required]],
      minPrice: [null],
      maxPrice: [null],
      kmTraveled: [null],
      limitedKm: [null],
      seats: [null],
      availableCDW: [false],
      dates: [null, [Validators.required]]
    });
  }


  disabledDate = (current: Date): boolean => {
    //najmanje 48h od trenutka pretragevalidacija da moze da selektuje datum 
    let tomorrow = new Date();
    tomorrow.setDate(this.today.getDate() + 2);
    return differenceInCalendarDays(current, tomorrow) < 0;
  };

  onOk(result: Date[] ): void {
    this.dateFrom = new Date(result[0]);
    this.dateTo = new Date(result[1]);
    this.transferDateToString(this.dateFrom.toISOString(),this.dateTo.toISOString());
  }

  transferDateToString(date1: string, date2: string): void {
    this.fromDateString = date1.split('T')[0];
    this.toDateString = date2.split('T')[0];
    this.fromTimeString = date1.split('T')[1].substring(0,5);
    this.toTimeString = date2.split('T')[1].substring(0,5);
  }
  
  private getCarModels(): void {
    this.cmService.getAllCarModels().subscribe(data => {
      this.carModels = data;
    }, error => {
      alert("Error");
    })
  }
  private getCarBrands(): void {
    this.cbService.getAllCarBrands().subscribe(data => {
      this.carBrands = data;
    }, error => {
      alert("Error");
    })
  }
  private getCarClasses(): void {
    this.ccService.getAllCarClasses().subscribe(data => {
      this.carClasses = data;
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

  private setupCart(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  search():void {
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let data = {
      carBrandId: this.selectedCarBrand == undefined ? -1 : this.selectedCarBrand,
      carModelId: this.selectedCarModel == undefined ? -1 : this.selectedCarModel,
      carClassId: this.selectedCarClass == undefined ? -1 : this.selectedCarClass,
      fuelTypeId: this.selectedFuelType == undefined ? -1 : this.selectedFuelType,
      gearshiftTypeId: this.selectedGearshiftType == undefined ? -1 : this.selectedGearshiftType,
      minPrice: this.validateForm.value.minPrice == null ? -1 : this.validateForm.value.minPrice,
      maxPrice: this.validateForm.value.maxPrice == null ? -1 : this.validateForm.value.maxPrice,
      kmTraveled: this.validateForm.value.kmTraveled == null ? -1 : this.validateForm.value.kmTraveled,
      limitedKm: this.validateForm.value.limitedKm == null ? -1 : this.validateForm.value.limitedKm,
      seats: this.validateForm.value.seats == null ? -1 : this.validateForm.value.seats,
      availableCDW: this.validateForm.value.availableCDW == null ? false : this.validateForm.value.availableCDW,
      address: this.validateForm.value.address == null ? "" : this.validateForm.value.address,
      fromTimeString: this.fromTimeString,
      toTimeString: this.toTimeString,
      fromDateString: this.fromDateString,
      toDateString: this.toDateString
    }
    
    console.log(data);
    this.searchService.search(data).subscribe(data => {
      this.ads = data.ads;
      if(this.cart.length){
        for(let i = 0; i < this.cart.length; i++){
          for(let j = 0; j < this.ads.length; j++){
            for(let k = 0; k < this.cart[i].ads.length; k++){
             if(this.cart[i].ads[k].id === this.ads[j].id){
               this.ads.splice(j,1);
              }
            }
            
           } 
         }
       }
    }, error => {
      alert(error.error.text);
      //console.log(error.error.text);
    })
  }

  resetForm(): void {
    this.validateForm.reset();
    this.getAllAds();
  }

  getAllAds(): void {
    this.adService.getAllAds().subscribe(data => {
      this.ads = data;
      if(this.cart.length){
       for(let i = 0; i < this.cart.length; i++){
         for(let j = 0; j < this.ads.length; j++){
           for(let k = 0; k < this.cart[i].ads.length; k++){
            if(this.cart[i].ads[k].id === this.ads[j].id){
              this.ads.splice(j,1);
             }
           }
           
          } 
        }
      }
    }, error => {
      alert("Error");
    })    
  }

}
