import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleUserService } from 'src/app/services/simple-user.service';

@Component({
  selector: 'app-simple-user',
  templateUrl: './simple-user.component.html',
  styleUrls: ['./simple-user.component.css']
})
export class SimpleUserComponent implements OnInit {

  
  private id: string;
  model: any = {}

  constructor(private route: ActivatedRoute, private simpleUserService: SimpleUserService, private router: Router) { }

  ngOnInit(): void {
    this.extractId();
    this.simpleUserService.getSimpleUser(this.id).subscribe(data => {
      this.model.firstName = data.firstName;
      this.model.lastName = data.lastName;
      this.model.address = data.address;
      this.model.ssn = data.ssn;
    },
    error => {
      alert(error);
    });

  }

  private extractId(): void {
    this.id = this.route.snapshot.params.id;
  }

  updateSimpleUser(): void {
    this.simpleUserService.updateSimpleUser(this.id, this.model).subscribe(data => {
        alert("Profile updated.")
    }, error => {
      alert("Error")
    });
  }

}
