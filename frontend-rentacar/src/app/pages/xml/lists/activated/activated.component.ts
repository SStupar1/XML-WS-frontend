import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SimpleUserService } from 'src/app/services/simple-user.service';

@Component({
  selector: 'app-activated',
  templateUrl: './activated.component.html',
  styleUrls: ['./activated.component.css']
})
export class ActivatedComponent implements OnInit {

  public activatedSimpleUsers = [];

  constructor(private suService: SimpleUserService, private router: Router) { }
  
  ngOnInit(): void {
    this.getAllSimpleUsers();
  }

  private getAllSimpleUsers(): void {
    this.suService.getAllSimpleUsers().subscribe(data => {
      this.activatedSimpleUsers = data;
    }, error => {
      alert("Error");
    })
  }

  public block(id): void {
    const body = {
      id: id
    }
    this.suService.blockSimpleUser(body).subscribe(data =>{
      this.getAllSimpleUsers();
      alert("Uspesno blokiran");
    })
  }

  public delete(id): void {
    this.suService.deleteSimpleUser(id).subscribe(data =>{
      this.getAllSimpleUsers();
      alert("Uspesno obrisan");
    })
  }
}
