import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';
import { PictureService } from 'src/app/services/picture.service';
import { FormBuilder, FormGroup ,Validators} from '@angular/forms';
import { PublisherAdListComponent } from '../lists/publisher-ad-list/publisher-ad-list.component';

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
    //console.log(this.cart);
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

    if(!this.publisherExist(this.ad)){
      //napravi novi item
      let item = {
        id: this.ad.publisher.id,
        name : this.ad.simpleUser == true ? (this.ad.publisher.firstName + " " + this.ad.publisher.lastName) : this.ad.publisher.name,
        address: this.ad.publisher.address,
        simpleUser: this.ad.simpleUser,
        ads: [
          {
            id: this.ad.id,
            cdw: this.ad.cdw,
            name: this.ad.name,
            fromDateString: this.fromDateString,
            toDateString: this.toDateString,
            fromTimeString: this.fromTimeString,
            toTimeString: this.toTimeString
          }
        ]
      }
      this.cart.push(item);
      localStorage.setItem('cart', JSON.stringify(this.cart));
      console.log("napravio sam novi");
      console.log(this.cart);
    }
    this.router.navigateByUrl(`dashboard/lists/rent-ad-list`);

    /*
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
              publisher: {
                            id : this.ad.publisher.id,
                            name : this.ad.simpleUser == true ? (this.ad.publisher.firstName + " " + this.ad.publisher.lastName) : this.ad.publisher.name,
                            address: this.ad.publisher.address,
                            simpleUser: this.ad.simpleUser
                         }
           }
    }
    */
  }

  private publisherExist(ad): boolean{
    let retVal : boolean = false;
    this.cart.forEach(publisher => {
      if(publisher.simpleUser === ad.simpleUser){
        if(publisher.id === ad.publisher.id){
          //dodaj mu ad
          let formatedAd = {
            id: ad.id,
            cdw: ad.cdw,
            name: ad.name,
            fromDateString: this.fromDateString,
            toDateString: this.toDateString,
            fromTimeString: this.fromTimeString,
            toTimeString: this.toTimeString
          }
          publisher.ads.push(formatedAd);
          retVal = true;
          console.log("postojeci publisher: oglas++");
          console.log(publisher);
        }
      }
    });
    
    localStorage.setItem('cart', JSON.stringify(this.cart));
    console.log(this.cart);
    return retVal;
  }

  
}
