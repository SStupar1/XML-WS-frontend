import { Component, OnInit } from '@angular/core';
import { RegistrationRequestService } from 'src/app/services/registration-request.service';

@Component({
  selector: 'app-registration-requests',
  templateUrl: './registration-requests.component.html',
  styleUrls: ['./registration-requests.component.css']
})
export class RegistrationRequestsComponent implements OnInit {

  public pendingUsers = [];

  constructor(private rrService: RegistrationRequestService) { }
  

  ngOnInit(): void {
    this.getAllPendingUsers();
  }

  private getAllPendingUsers(): void {
    this.rrService.getAllPendingUsers().subscribe(data => {
      this.pendingUsers = data;
    }, error => {
      alert("Error");
    })
  }

  public approve(id): void {
    const body = {
      id: id
    }
    this.rrService.approveRegistrationRequest(body).subscribe(data =>{
      this.getAllPendingUsers();
      alert("Uspesno apruvovan");
    })
  }

  public deny(id): void {
    const body = {
      id: id
    }
    this.rrService.denyRegistrationRequest(body).subscribe(data =>{
      this.getAllPendingUsers();
      alert("Denajovan");
    })
  }
}
