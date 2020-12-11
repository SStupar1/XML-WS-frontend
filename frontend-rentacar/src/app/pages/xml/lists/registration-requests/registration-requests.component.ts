import { Component, OnInit } from '@angular/core';
import { RegistrationRequestService } from 'src/app/services/registration-request.service';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  public pendingUsers = [];

  
  headers = ["Username", "Firstname", "Lastname", "SSN", "Address"];

  constructor(private rrService: RegistrationRequestService) { }
  

  ngOnInit(): void {
    this.getAllPendingUsers();
  }

 /* private getAllPendingUsers(): void {
    this.rrService.getAllPendingUsers().subscribe(data => {
      this.pendingUsers = data;
      alert("success");
      console.log("list of pending users" + this.pendingUsers);
    },
    error => {
     alert("error");
    });
   
  }*/

  private getAllPendingUsers(): void {
    this.rrService.getAllPendingUsers().subscribe(data => {
      this.pendingUsers = data;
    }, error => {
      alert("Error");
    })
  }

}
