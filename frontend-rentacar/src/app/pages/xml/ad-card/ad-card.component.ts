import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AdService } from 'src/app/services/ad.service';
import { AgentService } from 'src/app/services/agent.service';
import { PictureService } from 'src/app/services/picture.service';
import { SimpleUserService } from 'src/app/services/simple-user.service';

@Component({
  selector: 'app-ad-card',
  templateUrl: './ad-card.component.html',
  styleUrls: ['./ad-card.component.css']
})
export class AdCardComponent implements OnInit {

  @Input() ad: any;
  @Input() rentAction: boolean; //u zavisnosti od ovog parametra renderujemo akcije u card komponenti
  private user: any;
  private pictureExists: boolean = true;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;


  constructor(private adService: AdService, private router: Router, private suService: SimpleUserService, private agentService: AgentService, private pService: PictureService) { }

  ngOnInit(): void {
    this.checkPictureExists(this.ad);
    this.setupUser();
    console.log(this.ad);
  }

  private setupUser(): void {
    this.user = JSON.parse(localStorage.getItem('user'));
  } 

  private checkPictureExists(ad){
    if (ad.pictures === undefined || ad.pictures.length == 0) {
      // array empty or does not exist
      this.pictureExists = false;
    }else{
      this.extractPicture(ad);
    }
  }

  private extractPicture(ad){
    this.pService.getImage(this.ad.pictures[0].id).subscribe(response => {
      this.retrieveResonse = response;
      this.base64Data = this.retrieveResonse.picByte;
      this.retrievedImage = 'data:image/jpeg;base64,' + this.base64Data;
    }, error => {
    alert("Error");
    })
  }

  public updateAd(id){
    this.router.navigateByUrl(`dashboard/updates/update-ad/${id}`);
  }

  public deleteAd(id){
    this.adService.deleteAd(id).subscribe(data =>{
      this.router.navigateByUrl(`dashboard/lists/publisher-ad-list`);
    })
  }
}
