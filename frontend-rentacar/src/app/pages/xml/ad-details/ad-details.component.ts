import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';
import { PictureService } from 'src/app/services/picture.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {
  validateForm!: FormGroup;
  private id : any;
  public ad: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  public cart = [];
  //dates
  public fromDateString : string = "";
  public toDateString : string = "";
  public fromTimeString: string = "";
  public toTimeString: string = "";
  public dateFrom : Date;
  public dateTo: Date;
  dates: any;
  private item: any;

  constructor(private router: Router, private route: ActivatedRoute, private adService: AdService, private pService: PictureService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getDetails();
    this.setupCart();
    this.validateForm = this.fb.group({
      cdw: [false],
      dates: [null, [Validators.required]]
    });
  }

  private setupCart(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
    console.log(this.cart);
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    this.adService.getAd(this.id).subscribe(data =>{
      this.ad = data;
    })
  }

  public getPicture(id){
    this.pService.getImage(id).subscribe(response => {
      this.retrieveResonse = response;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }, error => {
    alert("Error");
    })
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

  addToCart(){
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    this.item = {
      dates : {
                fromDateString : this.fromDateString,
                toDateString : this.toDateString,
                fromTimeString : this.fromTimeString,
                toTimeString : this.toTimeString
              },
      ad : {
              id : this.ad.id,
              cdw: this.ad.cdw,
              name: this.ad.name,
              simpleUser: this.ad.simpleUser,
              publisher: {
                            name : this.ad.publisher.name,
                            firstName: this.ad.publisher.firstName,
                            lastName: this.ad.publisher.lastName,
                            address: this.ad.publisher.address
                         }
           }
    }
    
    this.cart.push(this.item);
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.router.navigateByUrl(`dashboard/lists/rent-ad-list`);
  }
}
