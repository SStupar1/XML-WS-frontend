import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentService } from 'src/app/services/rent.service';
import {RatingService} from 'src/app/services/rating.service';

@Component({
  selector: 'app-reservations-history',
  templateUrl: './reservations-history.component.html',
  styleUrls: ['./reservations-history.component.css']
})
export class ReservationsHistoryComponent implements OnInit {

  public user: any;
  public reservations = [];
  public ratings = [];
  public simpleUser = true;
  public selectedRate : any;
  tooltips = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
  value = 3;

  constructor(private rentService: RentService, private router: Router, private ratingService: RatingService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllCustomerReservations();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 
  
  private getAllCustomerReservations(){
    if(this.user.userRole === 'AGENT'){
      this.simpleUser = false;
    }
    let data = {
      customerId: this.user.id,
      simpleUser: this.simpleUser
    }
    this.rentService.getAllCustomerReservations(data).subscribe(response => {
      response.forEach(reservation => {
        if(reservation.status === "DROPPED"){
          this.reservations.push(reservation);
          let rating = {
            adId: reservation.ad.id,
            value: 0
          }
          this.ratings.push(rating);
          console.log(this.reservations);
          console.log(this.ratings);
        }
      });
    }, error => {
      alert("Error");
    })
  }

  addComment(adId){
    this.router.navigateByUrl(`dashboard/new-items/add-comment/${adId}`);
  }

  rate(adId){
    let grade;
    this.ratings.forEach(rating => {
      if(adId === rating.adId){
        grade = rating.value;
      }
    });
    let body = {
      simpleUserId: this.user.id,
      grade: grade,
      adId: adId
    }
    this.ratingService.rateAd(body).subscribe(data => {
      alert('Rated!');
      /*
      this.ratings.forEach(rating => {
        if(rating.adId === adId){
          rating.disabled = true;
        }
      });
      */
      //this.router.navigateByUrl(`dashboard/lists/reservations-history`);
    }, error => {
      alert('Error');
    })
  }

}