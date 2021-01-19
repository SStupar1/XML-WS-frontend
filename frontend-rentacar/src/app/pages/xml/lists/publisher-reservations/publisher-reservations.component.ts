import { Component, OnInit } from '@angular/core';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-publisher-reservations',
  templateUrl: './publisher-reservations.component.html',
  styleUrls: ['./publisher-reservations.component.css']
})
export class PublisherReservationsComponent implements OnInit {

  public user: any;
  public reservations = [];
  private simpleUser = true;

  constructor(private rentService: RentService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPublisherReservations();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getAllPublisherReservations(){
    if(this.user.userRole === 'AGENT'){
      this.simpleUser = false;
    }
      let data = {
        publisherId: this.user.id,
        simpleUser: this.simpleUser
      }
      this.rentService.getAllPublisherReservations(data).subscribe(response => {
        this.reservations = response;
      }, error => {
        alert("Error");
      })
  }

  approve(reservationId){
    const body = {
      id: reservationId
    }
    this.rentService.approveReservation(body).subscribe(response => {
      location.reload();
    }, error => {
      alert("Error");
    })
  }

  deny(reservationId){
    const body = {
      id: reservationId
    }
    this.rentService.denyReservation(body).subscribe(response => {
      location.reload();
    }, error => {
      alert("Error");
    })
  }
}
