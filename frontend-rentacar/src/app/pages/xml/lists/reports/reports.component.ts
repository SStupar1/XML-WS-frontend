import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RentService } from 'src/app/services/rent.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  public user: any;
  public reservations = [];
  private simpleUser = true;

  constructor(private rentService: RentService, private router: Router) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllApprovedPublisherReservations();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getAllApprovedPublisherReservations(){
    if(this.user.userRole === 'AGENT'){
      this.simpleUser = false;
    }
      let data = {
        publisherId: this.user.id,
        simpleUser: this.simpleUser
      }
      this.rentService.getAllApprovedPublisherReservations(data).subscribe(response => {
        this.reservations = response;
      }, error => {
        alert("Error");
      })
  }

  generateReport(reservationId){
      this.router.navigateByUrl(`dashboard/new-items/add-report/${reservationId}`);
  }


}
