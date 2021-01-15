import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';
import { PictureService } from 'src/app/services/picture.service';

@Component({
  selector: 'app-ad-details',
  templateUrl: './ad-details.component.html',
  styleUrls: ['./ad-details.component.css']
})
export class AdDetailsComponent implements OnInit {
  private id : any;
  public ad: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;

  constructor(private route: ActivatedRoute, private adService: AdService, private pService: PictureService) { }

  ngOnInit(): void {
    this.getDetails();
  }

  public getDetails(): void {
    this.id = this.route.snapshot.params.id;
    console.log(this.id);
    this.adService.getAd(this.id).subscribe(data =>{
      this.ad = data;
      console.log(data);
      console.log(this.ad);
    })
  }

  public getPicture(id){
    console.log("usao sam u getPicture");
    console.log(id);
    this.pService.getImage(id).subscribe(response => {
      this.retrieveResonse = response;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }, error => {
    alert("Error");
    })  }


}
