import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-reservations-history',
  templateUrl: './reservations-history.component.html',
  styleUrls: ['./reservations-history.component.css']
})
export class ReservationsHistoryComponent implements OnInit {

  public user: any;
  public reservations = [];
  private simpleUser = true;

  constructor(private rentService: RentService, private router: Router) { }

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
        }
      });
      console.log(this.reservations);
    }, error => {
      alert("Error");
    })
  }

  addComment(adId){
    this.router.navigateByUrl(`dashboard/new-items/add-comment/${adId}`);
  }

  rate(adId){}

  

}
