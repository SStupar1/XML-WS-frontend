import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  onButtonClickRegistration():void{
    this.router.navigate(['register-simple-user']);
  }

  onButtonClickLogin():void{
    this.router.navigate(['login']);
  }
}
