import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';


@Component({
  selector: 'app-advertisements',
  templateUrl: './advertisements.component.html',
  styleUrls: ['./advertisements.component.css']
})
export class AdvertisementsComponent implements OnInit {

  public ads = [];
  private user: any;

  constructor(private adService: AdService,) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPublisherAds();
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private getAllPublisherAds(): void {
    this.adService.getAllPublisherAds(this.user.id).subscribe(data => {
      this.ads = data;
    }, error => {
      alert("Error");
    })
  }

}
