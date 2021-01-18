import { Component, OnInit } from '@angular/core';
import { AdService } from 'src/app/services/ad.service';

@Component({
  selector: 'app-rent-ad-list',
  templateUrl: './rent-ad-list.component.html',
  styleUrls: ['./rent-ad-list.component.css']
})
export class RentAdListComponent implements OnInit {

  public ads = [];
  public cart = [];


  //app-ad-card tag kad pozivam nested ad-card
  constructor(private adService: AdService) { }

  ngOnInit(): void {
    this.ads = [];
    this.setupCart();
    this.getAllAds();
  }

  private setupCart(){
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  getAllAds(): void {
    
    this.adService.getAllAds().subscribe(data => {
      this.ads = data;
      if(this.cart.length){
       for(let i = 0; i < this.cart.length; i++){
         for(let j = 0; j < this.ads.length; j++){
           if(this.cart[i].ad.id === this.ads[j].id){
             this.ads.splice(j,1);
             console.log(this.ads);
            }
          } 
        }
      }
    }, error => {
      alert("Error");
    })    
  }

}
