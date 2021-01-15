import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public ads = [];


  constructor(private router:Router, private adService: AdService) { }

  ngOnInit(): void {
    this.getAllAds();
  }

  getAllAds(): void{
    this.adService.getAllAds().subscribe(data => {
      this.ads = data;
    }, error => {
      alert("Error");
    })
  }

  onButtonClickRegistration():void{
    this.router.navigate(['register-simple-user']);
  }

  onButtonClickLogin():void{
    this.router.navigate(['login']);
  }
}
