import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-rent-ad-list',
  templateUrl: './rent-ad-list.component.html',
  styleUrls: ['./rent-ad-list.component.css']
})
export class RentAdListComponent implements OnInit {

  public ads = [];

  //app-ad-card tag kad pozivam nested ad-card
  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.getAllAds();
  }

  getAllAds(): void {
    this.adService.getAllAds().subscribe(data => {
      this.ads = data;
    }, error => {
      alert("Error");
    })
  }

}
