import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';
import { CarService } from 'src/app/services/car.service';
import { FuelTypeService } from 'src/app/services/fuel-type.service';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {

  public ads = [];
  private user: any;
  public cars = [];
  public fuelTypes = [];
  public fuelType: any;

  constructor(private router: Router, private adService: AdService, private carService: CarService, private ftService: FuelTypeService) { }

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

  public updateCar(id){
    this.router.navigateByUrl(`dashboard/updates/update-car/${id}`);
  }

  public updateAd(id): void {
    this.router.navigateByUrl(`dashboard/updates/update-ad/${id}`);
  }

  public delete(id): void {
    this.adService.deleteAd(id).subscribe(data =>{
      this.getAllPublisherAds();
    })
  }
}
