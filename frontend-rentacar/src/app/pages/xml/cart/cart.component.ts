import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public publishers = [];
  public user: any;
  private bundle = [];
  public startingPrices = [];
  
  constructor(private rentService: RentService, private priceService: PriceService) { }

  ngOnInit(): void {
    this.setupCart();
    this.setupUser();
  }

  
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private setupCart(){
    this.publishers = JSON.parse(localStorage.getItem('cart'));
    this.publishers.forEach(publisher => {
      let data = {
        price : 0
      }
      this.startingPrices.push(data);
    });
    console.log(this.publishers);
  }

  rentSeparately(id, simpleUser){
    this.publishers.forEach(publisher => {
      if(simpleUser === publisher.simpleUser){
        if(id === publisher.id){
          publisher.ads.forEach(ad => {
            const body = {
              adId: ad.id,
              customerId: this.user.id,
              fromDateString: ad.fromDateString,
              toDateString: ad.toDateString,
              fromTimeString: ad.fromTimeString,
              toTimeString: ad.toTimeString,
              simpleUser: this.user.simpleUser
            }
            this.rentService.createReservation(body).subscribe(response => {
              console.log(response);
            }, error => {
              alert("Error");
            })
          });
        }
      }
    });

    for(let i = 0; i < this.publishers.length; i++){
      if(id === this.publishers[i].id){
        this.publishers.splice(i,1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.publishers));
    location.reload();
  }

  rentBundle(id, simpleUser){
    this.publishers.forEach(publisher => {
      if(simpleUser === publisher.simpleUser){
        if(id === publisher.id){
          publisher.ads.forEach(ad => {
            const body = {
              adId: ad.id,
              customerId: this.user.id,
              fromDateString: ad.fromDateString,
              toDateString: ad.toDateString,
              fromTimeString: ad.fromTimeString,
              toTimeString: ad.toTimeString,
              simpleUser: this.user.simpleUser
            }
            this.bundle.push(body);
          });
        }
      }
    });

    let body = {
      reservationRequestList: this.bundle
    }

    this.rentService.createBundle(body).subscribe(response => {
      console.log(response);
    }, error => {
      alert("Error");
    })
    for(let i = 0; i < this.publishers.length; i++){
      if(id === this.publishers[i].id){
        this.publishers.splice(i,1);
      }
    }
    localStorage.setItem('cart', JSON.stringify(this.publishers));
    location.reload();
  }

  calculateStartingPrice(index){
    //pozvati za svaki oglas calculatePrice(
    //ad.pricelist.priceCDW, ad.pricelist.pricePerDay, ad.pricelist.pricePerKilometer, ad.pricelist.discount.discount, )
    let publisher = this.publishers[index];
    publisher.ads.forEach(ad => {
      //pozvati sa back-a metodu koja racuna pocetnu cenu po ad-u
      let body = {
        priceCDW: ad.pricelist.priceCDW,
        availableCDW: ad.cdw,
        pricePerDay: ad.pricelist.pricePerDay,
        discount: ad.pricelist.discount.discount,
        fromDateString: ad.fromDateString,
        toDateString: ad.toDateString
      }
      this.priceService.calculateStartingPricePerAd(body).subscribe(response => {
        console.log("cena za oglas: ");
        console.log(response.price);
        this.startingPrices[index].price  += response.price;
      })
    }); 
  }







}
