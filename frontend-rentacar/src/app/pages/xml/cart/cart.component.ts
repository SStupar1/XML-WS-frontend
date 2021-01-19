import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  public publishers = [];
  public user: any;
  private bundle = [];
  
  constructor(private rentService: RentService) { }

  ngOnInit(): void {
    this.setupCart();
    this.setupUser();
  }

  
  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private setupCart(){
    this.publishers = JSON.parse(localStorage.getItem('cart'));
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
  }










}
