import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-publisher-ad-list',
  templateUrl: './publisher-ad-list.component.html',
  styleUrls: ['./publisher-ad-list.component.css']
})
export class PublisherAdListComponent implements OnInit {

  private user: any;
  public ads = [];

  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.setupUser();
    this.getAllPublisherAds();
  }

  getAllPublisherAds(): void {
    this.adService.getAllPublisherAds(this.user.id).subscribe(data => {
      this.ads = data;
    }, error => {
      alert("Error");
    })
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

}
