import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleUserService } from 'src/app/services/simple-user.service';

@Component({
  selector: 'app-blocked',
  templateUrl: './blocked.component.html',
  styleUrls: ['./blocked.component.css']
})
export class BlockedComponent implements OnInit {

  public blockedSimpleUsers = [];

  constructor(private suService: SimpleUserService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAllBlockedSimpleUsers();
  }

  private getAllBlockedSimpleUsers(): void {
    this.suService.getAllBlockedSimpleUsers().subscribe(data => {
      this.blockedSimpleUsers = data;
    }, error => {
      alert("Error");
    })
  }

  public activate(id): void {
    const body = {
      id: id
    }
    this.suService.activateSimpleUser(body).subscribe(data =>{
      this.getAllBlockedSimpleUsers();
      alert("Uspesno aktiviran");
    })
  }

}
