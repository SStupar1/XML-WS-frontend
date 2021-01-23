import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { RentService } from 'src/app/services/rent.service';



@Component({
  selector: 'app-add-reservation',
  templateUrl: './add-reservation.component.html',
  styleUrls: ['./add-reservation.component.css']
})
export class AddReservationComponent implements OnInit {

  validateForm!: FormGroup;
  private user: any;
  public ads = [];
  private simpleUser = false;
  public selectedAd: any;
  //dates
  public fromDateString : string = "";
  public toDateString : string = "";
  public fromTimeString: string = "";
  public toTimeString: string = "";
  public dateFrom : Date;
  public dateTo: Date;
  dates: any;
  

  constructor(private adService: AdService, private fb: FormBuilder, private rentService: RentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPublisherAds();
    this.dates = {
      fromDateString : "",
      toDateString: "",
      fromTimeString: "",
      toTimeString: ""
    }
    this.validateForm = this.fb.group({
      customerId: [null],
      dates: [null, [Validators.required]]
    });
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getAllPublisherAds(): void {
    this.adService.getAllPublisherAds(this.user.id, this.simpleUser).subscribe(data => {
      this.ads = data;
    }, error => {
      alert("Error");
    })
    console.log(this.ads);
  }

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

  createReservation(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    let body = {
      adId: this.selectedAd,
      customerId: this.validateForm.value.customerId,
      fromTimeString: this.fromTimeString,
      toTimeString: this.toTimeString,
      fromDateString: this.fromDateString,
      toDateString: this.toDateString,
      simpleUser: true
    }
    this.rentService.createReservation(body).subscribe(data => {
      let body = {
        id: data.id
      }
      this.rentService.approveReservation(body).subscribe(data => {
        console.log("reservation approved!");
        console.log(data);
      }, error => {
        alert(error.error.text);
        //console.log(error.error.text);
      })
    }, error => {
      alert(error.error.text);
      //console.log(error.error.text);
    })
    
    
  }

  

}
